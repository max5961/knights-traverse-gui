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
        if (destination.classList.contains("start-point")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(Build.destinationMarker());
        setTimeout(() => {
            ChessBoard.animateDestinationMarker();
        });
    }
}

export class KnightPiece {
    mouseDown: boolean;
    startHTMLClass: string;
    destHTMLClass: string;

    constructor(parentElement: any = null) {
        this.mouseDown = false;
        this.startHTMLClass = "start-point";
        this.destHTMLClass = "destination";
        this.init(parentElement);
    }

    init(parentElement: any = null): void {
        parentElement ??
            document.querySelector(".chess-board")!.firstElementChild;

        const knightImage = create("img", {
            class: "knight-svg",
            src: knight,
            draggable: "false",
        });

        knightImage.onmouseup = (e) => this.setClick(e);
        knightImage.onmousedown = (e) => this.setClick(e);

        // make sure there is only one location with the start point class
        this.removeGlobalClassName(this.startHTMLClass, ".square");
        parentElement.classList.add(this.startHTMLClass);

        parentElement.appendChild(knightImage);
    }

    removeGlobalClassName(toRemove: string, qSelect: string) {
        const squares: NodeListOf<HTMLElement> =
            document.querySelectorAll(qSelect);
        squares.forEach((square) => {
            square.classList.remove(toRemove);
            this.resetBG(square);
        });
    }

    dragImage = (e: any) => {
        let knight: HTMLElement = document.querySelector(".knight-svg")!;
        const chessBoard: HTMLElement = document.querySelector(".chess-board")!;

        if (this.mouseDown) {
            const chessBoardRect = chessBoard.getBoundingClientRect();
            if (this.isWithinElement(e, chessBoardRect)) {
                // chess piece is within the bounds of the chess board
                knight.style.top = `${e.clientY - knight.offsetHeight / 2}px`;
                knight.style.left = `${e.clientX - knight.offsetWidth / 2}px`;
                this.hoverSquare(e);
            } else {
                // chess piece has traveled out of bounds of the chess board
                this.mouseDown = false;
                knight.style.cursor = "default";
                this.placeImage(e);
            }
        }
    };

    placeImage(e: any) {
        // remove the knight from the DOM
        // a new knight will be appended to the chess board when a new KnightPiece object is initialized
        (document.querySelector(".knight-svg") as HTMLElement).remove();

        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        const originalStartPoint: HTMLElement =
            document.querySelector(".start-point")!;

        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        const chessBoard: HTMLElement = document.querySelector(".chess-board")!;
        if (!this.isWithinElement(e, chessBoard.getBoundingClientRect())) {
            new KnightPiece(originalStartPoint);
            return;
        }

        const locations: NodeListOf<HTMLElement> =
            document.querySelectorAll(".square");
        locations.forEach((location) => {
            const locationRect = location.getBoundingClientRect();
            if (this.isWithinElement(e, locationRect)) {
                if (this.isValidDropPoint(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight tied to a new KnightPiece object
                    new KnightPiece(location);
                    return;
                } else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight in place of the original start point
                    new KnightPiece(originalStartPoint);
                    return;
                }
            }
        });
    }

    isWithinElement(e: any, bRect: any) {
        return (
            e.clientX >= bRect.left &&
            e.clientX <= bRect.right &&
            e.clientY >= bRect.top &&
            e.clientY <= bRect.bottom
        );
    }

    isValidDropPoint(square: HTMLElement): boolean {
        return !square.classList.contains(this.destHTMLClass);
    }

    highlightDropPoint(square: HTMLElement): void {
        const highlightColor = "#00cd34";
        square.classList.add("valid-drop");
    }

    resetBG(square: HTMLElement) {
        square.classList.remove("valid-drop");
    }

    hoverSquare(e: any): void {
        const squares: NodeListOf<HTMLElement> =
            document.querySelectorAll(".square");
        squares.forEach((square) => {
            if (this.isWithinElement(e, square.getBoundingClientRect())) {
                if (this.isValidDropPoint(square)) {
                    this.highlightDropPoint(square);
                    return;
                }
            }

            this.resetBG(square);
        });
    }

    setClick(e: any) {
        const chessBoard: HTMLElement = document.querySelector(".chess-board")!;
        const knight: HTMLElement = document.querySelector(".knight-svg")!;

        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            chessBoard.addEventListener("mousemove", this.dragImage);
        }

        if (e.type === "mouseup") {
            this.mouseDown = false;
            knight.style.cursor = "default";
            this.placeImage(e);
            chessBoard.removeEventListener("mousemove", this.dragImage);
            return;
        }
    }
}
