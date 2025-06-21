export default async function typewriter(htmlElement, text, writingSpeed) {
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

    const textContentLen = htmlElement.textContent.length;
    const textLength = text.length;

    if (textContentLen === 0) {
        htmlElement.classList.add("blink-caret");
    }
    // handle cleanup
    if (textContentLen === textLength) {
        const typingHandlerId = Number(htmlElement.getAttribute("typingHandlerId"));
        htmlElement.classList.remove("blink-caret");
        clearTimeout(typingHandlerId);
        return "Typing Completed...";
    };

    // add each character on function recall
    htmlElement.textContent += text[textContentLen];

    /**initialize the typingHandlerId to fully diasble the typer later */
    let typingHandlerId = setTimeout(() => typewriter(htmlElement, text, writingSpeed), writingSpeed);
    htmlElement.setAttribute("typingHandlerId", typingHandlerId.toString());
}