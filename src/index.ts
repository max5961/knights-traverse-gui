import "./style/index.scss";
import {
    DOM,
    Load,
    DraggableKnight,
    Coords,
    DestMarker,
    Animate,
} from "./controller";
import { Build } from "./view";

Load.defaultUI();

const chessBoard = DOM.getChessboard();
const startPosition = chessBoard.children[0]!;
const destPosition = chessBoard.children[63]!;
new DraggableKnight(startPosition);
destPosition.appendChild(Build.destinationMarker());
destPosition.classList.add("destination");
DestMarker.animateDestinationMarker();
Coords.updateInputValue();
Animate.updateMessage();

window.addEventListener("load", () => {
    const boardContainer: HTMLElement =
        document.querySelector(".board-container")!;
    boardContainer.style.opacity = "1";
});
