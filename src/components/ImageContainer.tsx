import React from "react";

type Fit = "cover" | "contain" | "fill" | "none" | "scale-down";

interface ImageContainerProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  caption?: string;
  fit?: Fit;
  figureClassName?: string;
  imgClassName?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  caption,
  figureClassName = "",
  imgClassName = "",
  fit = "cover",
  ...imgProps
}) => {
  return (
    <figure
      className={`flex flex-col items-center justify-center overflow-hidden rounded-2xl ${figureClassName}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`rounded-lg shadow object-${fit} object-center h-full w-full ${imgClassName}`}
        {...imgProps}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageContainer;
