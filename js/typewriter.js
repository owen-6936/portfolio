export default function typewriter(htmlElement, text = "Sample Text", writingSpeed = 100) {
    // Error handling
    if (!(htmlElement instanceof HTMLElement)) {
        throw new TypeError("expected an Html element ");
    };
    if (typeof text !== "string") {
        throw new TypeError(`expected a string but recieved ${typeof text}`);
    }
    else if (text.length < 1) {
        console.warn("nothing might be displayed on screen as string is empty");
        return;
    }

    const textContentLength = htmlElement.textContent.length;
    const textLength = text.length;

    // handle cleanup
    if (textContentLength === textLength) {
        const typingHandlerId = Number(htmlElement.getAttribute("typingHandlerId"));
        clearTimeout(typingHandlerId);
        return "Typing Completed...";
    };

    // add each character on function recall
    htmlElement.textContent += text[textContentLength];

    /**initialize the typingHandlerId to fully diasble the typer later */
    let typingHandlerId = setTimeout(() => typewriter(htmlElement, text, writingSpeed), writingSpeed);
    htmlElement.setAttribute("typingHandlerId", typingHandlerId.toString());
}