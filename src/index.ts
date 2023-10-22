import "./style/index.scss";
import { Load, DraggableKnight, Coords, DestMarker } from "./controller";
import { Build } from "./view";

Load.defaultUI();

const chessBoard: HTMLElement = document.querySelector(".chess-board")!;
const firstChild = chessBoard.firstElementChild!;
const lastChild = chessBoard.lastElementChild!;
new DraggableKnight(firstChild);
lastChild.appendChild(Build.destinationMarker());
lastChild.classList.add("destination");
DestMarker.animateDestinationMarker();

Coords.updateInputValue();

setTimeout(() => {
    const boardContainer: HTMLElement =
        document.querySelector(".board-container")!;
    boardContainer.style.opacity = "1";
}, 0);
