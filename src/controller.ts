import knight from "./Images/knight.svg";
import { createElement as create } from "./createElement";
import { Build } from "./view";

export class Load {
    static defaultUI() {
        const content: HTMLElement = document.querySelector("#content")!;

        content.appendChild(Build.mainSection());
        content.appendChild(Build.boardContainer());
    }
}

export class ChessBoard {
    // prettier-ignore
    static animateDestinationMarker(): void {
        const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(".leg")!;
        nodes.forEach((node) => {
            if (node.className === "leg top" || node.className === "leg bottom") {
                node.style.height = "100%";
            } else {
                node.style.width = "100%";
            }
        });
    }

    static setDestination(e: any): void {
        const locations: NodeListOf<HTMLElement> = document.querySelectorAll(
            ".chess-board .square",
        );

        locations.forEach((square) => {
            if (square.classList.contains("knight-location")) {
                return;
            }
            if (square.classList.contains("destination")) {
                square.classList.remove("destination");
                square.removeChild(square.firstChild!);
            }
        });

        const destination = e.currentTarget;
        // do not allow placing the marker on top of the start point where the knight piece is located
        if (destination.classList.contains("start-location")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(Build.destinationMarker());
        setTimeout(() => {
            ChessBoard.animateDestinationMarker();
        });
    }
}

export class DraggableKnight {
    mouseDown: boolean;

    constructor(parentElement: any = null) {
        this.mouseDown = false;
        this.init(parentElement);
    }

    init(parentElement: any = null): void {
        parentElement ??
            document.querySelector(".chess-board")!.firstElementChild;

        const knightImage = create("img", {
            class: "knight-piece",
            src: knight,
            draggable: "false",
        });

        knightImage.onmouseup = (e) => this.setClick(e);
        knightImage.onmousedown = (e) => this.setClick(e);

        // make sure there is only one location with the start point class
        this.removeGlobalClassName("start-location", ".square");
        parentElement.classList.add("start-location");

        parentElement.appendChild(knightImage);
    }

    setClick(e: any) {
        const knight: HTMLElement = document.querySelector(".knight-piece")!;

        // set the mouseDown property if mousedown or mouseup on knight
        // dragKnight changes location of the knight piece based on the cursor position

        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            document.body.addEventListener("mousemove", this.dragKnight);
        }

        if (e.type === "mouseup") {
            this.mouseDown = false;
            knight.style.cursor = "default";
            this.placeKnight(e);
            document.body.removeEventListener("mousemove", this.dragKnight);
        }
    }

    dragKnight = (e: any) => {
        let knight: HTMLElement = document.querySelector(".knight-piece")!;
        const chessBoard: HTMLElement = document.querySelector(".chess-board")!;

        if (this.mouseDown) {
            if (this.isWithinElement(e, chessBoard)) {
                // chess piece is within the bounds of the chess board
                knight.style.top = `${e.clientY - knight.offsetHeight / 2}px`;
                knight.style.left = `${e.clientX - knight.offsetWidth / 2}px`;
                this.hoverSquare(e);
            } else {
                // chess piece has traveled out of bounds of the chess board
                this.mouseDown = false;
                knight.style.cursor = "default";
                this.placeKnight(e);
            }
        }
    };

    placeKnight(e: any) {
        // remove the knight from the DOM
        // a new knight will be appended to the chess board when a new DraggableKnight object is initialized
        (document.querySelector(".knight-piece") as HTMLElement).remove();

        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        const originalStartPoint: HTMLElement =
            document.querySelector(".start-location")!;

        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        const chessBoard: HTMLElement = document.querySelector(".chess-board")!;
        if (!this.isWithinElement(e, chessBoard)) {
            new DraggableKnight(originalStartPoint);
            return;
        }

        const locations: NodeListOf<HTMLElement> =
            document.querySelectorAll(".square");

        locations.forEach((location) => {
            if (this.isWithinElement(e, location)) {
                if (this.isValidDropLoc(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight to the specified square
                    new DraggableKnight(location);
                    return;
                } else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight to the original start point
                    new DraggableKnight(originalStartPoint);
                    return;
                }
            }
        });
    }

    isWithinElement(e: any, el: HTMLElement): boolean {
        const boundingRect = el.getBoundingClientRect();
        return (
            e.clientX >= boundingRect.left &&
            e.clientX <= boundingRect.right &&
            e.clientY >= boundingRect.top &&
            e.clientY <= boundingRect.bottom
        );
    }

    removeGlobalClassName(toRemove: string, qSelect: string): void {
        const squares: NodeListOf<HTMLElement> =
            document.querySelectorAll(qSelect);

        squares.forEach((square) => {
            square.classList.remove(toRemove);
            this.resetLocBG(square);
        });
    }

    isValidDropLoc(location: HTMLElement): boolean {
        return !location.classList.contains("destination");
    }

    highlightDropLoc(square: HTMLElement): void {
        square.classList.add("valid-drop");
    }

    resetLocBG(square: HTMLElement): void {
        square.classList.remove("valid-drop");
    }

    hoverSquare(e: any): void {
        const squares: NodeListOf<HTMLElement> =
            document.querySelectorAll(".square");
        squares.forEach((square) => {
            if (this.isWithinElement(e, square)) {
                if (this.isValidDropLoc(square)) {
                    this.highlightDropLoc(square);
                    return;
                }
            }

            this.resetLocBG(square);
        });
    }
}
