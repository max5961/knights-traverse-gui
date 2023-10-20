import "./style/index.scss";
import { Build } from "./view";
import { setDestination } from "./controller";

const content: HTMLElement = document.querySelector("#content")!;
content.appendChild(Build.boardContainer());

setTimeout(() => {
    // prettier-ignore
    const boardContainer: HTMLElement = document.querySelector(".board-container")!;
    boardContainer.style.opacity = "1";
}, 0);

const locations: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".chess-board .square",
);

locations.forEach((node) => {
    node.onclick = setDestination;
});
