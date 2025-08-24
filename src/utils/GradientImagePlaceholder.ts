/**
 * @fileoverview Utility function for generating base64-encoded SVG placeholder images with dynamic gradients and optional text.
 * @author Owen Erhabor
 */

interface GradientPlaceholderOptions {
  width?: number;
  height?: number;
  text?: string;
  useRadial?: boolean;
}

/**
 * Generates a dynamic gradient definition based on dimensions and text presence.
 */
const generateGradientDef = (
  id: string,
  width: number,
  height: number,
  hasText: boolean,
  useRadial: boolean
): string => {
  const stops = (() => {
    if (width > 300 || height > 300) return ["#e0eafc", "#cfdef3", "#c3cfe2"];
    if (hasText) return ["#fdfbfb", "#ebedee", "#d6d8db"];
    return ["#f6f8f9", "#dde3e9", "#cbd5e1"];
  })();

  const stopElements = stops
    .map((color, i) => {
      const offset = (i / (stops.length - 1)) * 100;
      return `<stop offset="${offset}%" style="stop-color:${color};stop-opacity:1" />`;
    })
    .join("");

  return useRadial
    ? `<radialGradient id="${id}" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">${stopElements}</radialGradient>`
    : `<linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">${stopElements}</linearGradient>`;
};

/**
 * Wraps text into multiple lines based on a character limit.
 */
const wrapText = (str: string, maxChars: number): string[] => {
  const lines: string[] = [];
  const words = str.split(" ");
  let currentLine = "";

  words.forEach((word) => {
    if (currentLine.length + word.length + 1 > maxChars) {
      lines.push(currentLine.trim());
      currentLine = word + " ";
    } else {
      currentLine += word + " ";
    }
  });

  lines.push(currentLine.trim());
  return lines;
};

/**
 * Generates a base64 encoded SVG data URI with a subtle gradient placeholder and optional centered text.
 */
export const generateGradientPlaceholder = ({
  width = 100,
  height = 100,
  text = "",
  useRadial = false,
}: GradientPlaceholderOptions): string => {
  const fontFamily = "'Inter', sans-serif";
  const maxCharsPerLine = 20;
  const lineHeight = 12;
  const lines = wrapText(text, maxCharsPerLine);
  const totalTextHeight = lines.length * lineHeight;
  const startY = height / 2 - totalTextHeight / 2 + lineHeight / 2;

  const textElements = lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="50%" dy="${dy}">${line}</tspan>`;
    })
    .join("");

  const gradientId = "g";
  const gradientDef = generateGradientDef(
    gradientId,
    width,
    height,
    !!text,
    useRadial
  );

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
    <defs>${gradientDef}</defs>
    <rect width="${width}" height="${height}" rx="8" ry="8" fill="url(#${gradientId})" />
    ${
      text
        ? `<text 
      x="50%" 
      y="${startY}" 
      dominant-baseline="middle" 
      text-anchor="middle"
      font-family="${fontFamily}"
      fill="#444"
      font-size="10"
      font-weight="500"
    >${textElements}</text>`
        : ""
    }
  </svg>`;

  const encodeSvg = (svg: string): string =>
    window.btoa(unescape(encodeURIComponent(svg)));
  const encodedSvg = encodeSvg(svg);
  return `data:image/svg+xml;base64,${encodedSvg}`;
};
