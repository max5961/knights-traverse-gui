import knight from "./Images/knight.svg";
import { createElement as create } from "./createElement";
import { Build } from "./view";
import { shortestPath } from "./model";

export class Load {
    static defaultUI() {
        const content: HTMLElement = document.querySelector("#content")!;

        content.appendChild(Build.mainSection());
        content.appendChild(Build.boardContainer());
    }
}

export class Animate {
    static moveAlongPath(): void {
        const startCoords: number[] = Coords.getStart();
        const destCoords: number[] = Coords.getDest();
        const path: number[][] = shortestPath(startCoords, destCoords);
        const dCoords: number[][] | any = [];

        for (let i = 0; i < path.length - 1; i++) {
            const x = path[i][0];
            const y = path[i][1];

            const nx = path[i + 1][0];
            const ny = path[i + 1][1];

            const dx = nx - x;
            const dy = ny - y;
            dCoords.push([dx, dy]);
        }

        Animate.animateSingleCoord(dCoords);
    }

    static animateSingleCoord(dCoords: number[][] | any, i: number = 1): any {
        const [dx, dy] = dCoords.shift();
        const knight: HTMLElement = document.querySelector(".knight-piece")!;
        const square: HTMLElement = document.querySelector(".square")!;
        const squareSize = square.getBoundingClientRect().height;
        const xTranslate = dx * squareSize;
        const yTranslate = dy * squareSize;
        const transitionDuration = Animate.getKnightTransitionTime();

        const promise = new Promise((resolve) => {
            resolve(null);
        });

        promise
            .then(() => {
                return new Promise((resolve) => {
                    knight.style.transform = `translate(${xTranslate}px)`;
                    resolve(null);
                });
            })
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(null);
                    }, transitionDuration);
                });
            })
            .then(() => {
                return new Promise((resolve) => {
                    knight.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`;
                    resolve(null);
                });
            })
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(null);
                    }, transitionDuration);
                });
            })
            .then(() => {
                const newPosition = Animate.getWithinSquare();
                knight.remove();
                newPosition.appendChild(create("div", { tc: `${i}` }));
                new DraggableKnight(newPosition);
                Animate.animateSingleCoord(dCoords, i + 1);
            });
    }

    static getKnightTransitionTime(): number | any {
        const knight: HTMLElement = document.querySelector(".knight-piece")!;
        const transitionDuration: string =
            window.getComputedStyle(knight).transitionDuration;

        return parseFloat(transitionDuration) * 1000;
    }

    static getWithinSquare() {
        const knight: HTMLElement = document.querySelector(".knight-piece")!;
        const kPosition = knight.getBoundingClientRect();

        const squares: NodeListOf<HTMLElement> =
            document.querySelectorAll(".square");
        let targetSquare: HTMLElement | any;
        squares.forEach((square) => {
            const sPosition = square.getBoundingClientRect();
            if (
                kPosition.top > sPosition.top &&
                kPosition.bottom < sPosition.bottom &&
                kPosition.left > sPosition.left &&
                kPosition.right < sPosition.right
            ) {
                targetSquare = square;
            }
        });

        return targetSquare;
    }
}

export class Coords {
    static updateInputValue(): void {
        const startInput: HTMLInputElement =
            document.querySelector("input#start-coord")!;

        const destInput: HTMLInputElement = document.querySelector(
            "input#destination-coord",
        )!;

        const start: string = Coords.getStartString();
        const dest: string | null = Coords.getDestString();

        startInput.value = start;
        dest ? (destInput.value = dest) : (destInput.value = "");
    }

    // prettier-ignore
    static updateLocationFromInput(className: string, inputValue: string): void {
        const squares = Coords.getAllSquares();
        squares.forEach((square) => {
            if (square.classList.contains(className)) {
                square.classList.remove(className);
                square.removeChild(square.firstElementChild!);
            }
        });

        let coordNums: string;
        const letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        coordNums = `${letters.indexOf(inputValue[0])}-${inputValue[1]}`;

        squares.forEach((square) => {
            if (square.getAttribute("coord") === coordNums) {
                if (className === "start-location") {
                    new DraggableKnight(square);
                }
                if (className === "destination") {
                    const e = null;
                    DestMarker.setDestination(e, square);
                }
            }
        });
    }

    static inputIsValid(value: string): boolean {
        return value.length > 0 && value.length <= 2;
    }

    static validateInput(e: any): void {
        const inputField: HTMLInputElement = e.target;
        const firstLetter: string = inputField.value[0]
            ? inputField.value[0].toUpperCase()
            : "";
        const secondLetter: string = inputField.value[1]
            ? inputField.value[1]
            : "";

        const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
        if (!letters.includes(firstLetter)) {
            inputField.value = "";
            return;
        }

        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
        if (!numbers.includes(secondLetter)) {
            inputField.value = firstLetter;
            return;
        }

        if (inputField.value.length > 2) {
            inputField.value = inputField.value.slice(0, 2);
            return;
        }

        // prettier-ignore
        const startInput: HTMLInputElement = (document.querySelector("input#start-coord") as HTMLInputElement);
        // prettier-ignore
        const destInput: HTMLInputElement = (document.querySelector("input#destination-coord") as HTMLInputElement);

        if (inputField === startInput && e.target.value === destInput.value) {
            e.target.value = e.target.value.slice(0, 1);
            return;
        }

        if (e.target === destInput && e.target.value === startInput.value) {
            e.target.value = e.target.value.slice(0, 1);
            return;
        }

        if (Coords.inputIsValid(startInput.value)) {
            Coords.updateLocationFromInput("start-location", startInput.value);
        }

        if (Coords.inputIsValid(destInput.value)) {
            Coords.updateLocationFromInput("destination", destInput.value);
        }
    }

    static getStart(): number[] | any {
        return Coords.getCoords("start-location");
    }

    static getStartString(): string {
        return Coords.getStringCoords("start-location");
    }

    static getDest(): number[] | any {
        return Coords.getCoords("destination");
    }

    static getDestString(): string {
        return Coords.getStringCoords("destination");
    }

    static getCoords(targetClass: string): number[] | any {
        const squares = Coords.getAllSquares();

        let coords: number[] | null = null;
        squares.forEach((square) => {
            if (square.classList.contains(targetClass)) {
                const coordAttr: string = square.getAttribute("coord")!;
                coords = [
                    Number(coordAttr.split("-")[0]),
                    Number(coordAttr.split("-")[1]),
                ];
            }
        });

        return coords;
    }

    static getStringCoords(targetClass: string): string | any {
        const coords = Coords.getCoords(targetClass);
        const letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        if (!coords) {
            return null;
        }
        return `${letters[coords[0]]}${coords[1]}`;
    }

    static getAllSquares(): NodeListOf<HTMLElement> {
        return document.querySelectorAll(".square");
    }
}

export class DestMarker {
    // prettier-ignore
    static animateDestinationMarker(): void {
        setTimeout(() => {
            const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(".leg")!;
            nodes.forEach((node) => {
                if (node.className === "leg top" || node.className === "leg bottom") {
                    node.style.height = "100%";
                } else {
                    node.style.width = "100%";
                }
            });
        }, 0);
    }

    // prettier-ignore
    static setDestination(e: any, parentElement: HTMLElement | null = null): void {
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

        const destination = parentElement ? parentElement : e.currentTarget;
        // do not allow placing the marker on top of the start point where the knight piece is located
        if (destination.classList.contains("start-location")) {
            return;
        }
        destination.classList.add("destination");
        destination.appendChild(Build.destinationMarker());
        DestMarker.animateDestinationMarker();

        Coords.updateInputValue();
    }
}

export class DraggableKnight {
    mouseDown: boolean;

    constructor(parentElement: any = null) {
        this.mouseDown = false;
        this.init(parentElement);
    }

    init(parentElement: any = null): void {
        if (parentElement === null) {
            parentElement =
                document.querySelector(".chess-board")!.firstElementChild;
        }

        const knightImage = create("img", {
            class: "knight-piece",
            src: knight,
            draggable: "false",
        });

        knightImage.onmouseup = (e) => this.setClick(e);
        knightImage.onmousedown = (e) => this.setClick(e);

        // make sure there is only one location with the start location class
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
                    Coords.updateInputValue();
                    return;
                } else {
                    // knight is within the bounds of the specified square
                    // but is NOT in a valid location (can't drop on the destination point)
                    // append a new knight to the original start point
                    new DraggableKnight(originalStartPoint);
                    Coords.updateInputValue();
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
