import "./style/index.scss";
import { Load, Coords } from "./controller";

Load.defaultUI();

setTimeout(() => {
    // prettier-ignore
    const boardContainer: HTMLElement = document.querySelector(".board-container")!;
    boardContainer.style.opacity = "1";
}, 0);

setTimeout(() => {
    Coords.updateGUI();
}, 0);
