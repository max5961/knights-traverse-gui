import knight from "./Images/knight.svg";
import { createElement as create } from "./createElement";
import { Build } from "./view";
import { shortestPath } from "./model";

export class DOM {
    static getKnight(): HTMLElement {
        return document.querySelector(".knight-piece")!;
    }

    static getChessboard(): HTMLElement {
        return document.querySelector(".chess-board")!;
    }

    static getMarker(): HTMLElement {
        return document.querySelector(".marker")!;
    }

    static getAllMarkers(): NodeListOf<HTMLElement> {
        return document.querySelectorAll(".marker")!;
    }

    static getStartLocationSquare(): HTMLElement {
        return document.querySelector(".start-location")!;
    }

    static getDestLocationSquare(): HTMLElement | null {
        return document.querySelector(".destination");
    }

    static getFirstSquare(): HTMLElement {
        return document.querySelector(".square")!;
    }

    static getAllSquares(): NodeListOf<HTMLElement> {
        return document.querySelectorAll(".square")!;
    }

    static getStartCoordInput(): HTMLInputElement {
        return document.querySelector("input#start-coord")!;
    }

    static getDestCoordInput(): HTMLInputElement {
        return document.querySelector("input#destination-coord")!;
    }

    static getGoButton(): HTMLButtonElement {
        return document.querySelector("button.run-coords")!;
    }

    static getPathDesc(): HTMLElement {
        return document.querySelector(".path-desc")!;
    }

    static getPathCoords(): HTMLElement {
        return document.querySelector(".path-coords")!;
    }
}

export class Load {
    static defaultUI() {
        const content: HTMLElement = document.querySelector("#content")!;

        content.appendChild(Build.mainForm());
        content.appendChild(Build.boardContainer());
    }
}

export class Animate {
    static moveAlongPath(e: any): void {
        e.preventDefault();

        const startCoords: number[] = Coords.getStart();
        const destCoords: number[] = Coords.getDest();

        if (!startCoords || !destCoords) {
            return;
        }

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

        Animate.transitionDCoords(dCoords, path);
    }

    static transitionDCoords(
        dCoords: number[][] | any,
        path: number[][],
        i: number = 1,
    ): any {
        if (!dCoords.length) {
            Coords.updateInputValue();
            return;
        }

        // if first iteration, append a start marker to the knight position before movement
        let startPosition: HTMLElement;
        if (i === 1) {
            startPosition = Animate.getKnightPosition();
        }

        const [dx, dy] = dCoords.shift();
        const knight: HTMLElement = document.querySelector(".knight-piece")!;
        const originalTransitionDuration = Animate.getKnightTransitionTime();
        const square: HTMLElement = document.querySelector(".square")!;
        const squareSize = square.getBoundingClientRect().height;
        const xTranslate = dx * squareSize;
        const yTranslate = dy * squareSize;

        new Promise((resolve) => {
            resolve(null);
        })
            // traverse the x axis
            .then(() => {
                return new Promise((resolve) => {
                    Animate.modifyTransitionDuration(
                        dx,
                        originalTransitionDuration,
                        knight,
                    );
                    knight.style.transform = `translate(${xTranslate}px)`;
                    resolve(null);
                });
            })

            // wait until the transition is done
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(null);
                    }, Animate.getKnightTransitionTime());
                });
            })

            // traverse the y axis
            .then(() => {
                return new Promise((resolve) => {
                    Animate.modifyTransitionDuration(
                        dy,
                        originalTransitionDuration,
                        knight,
                    );
                    knight.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`;
                    resolve(null);
                });
            })

            // wait until the transition is done
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(null);
                    }, Animate.getKnightTransitionTime());
                });
            })

            // reset the position by removing and adding a new knight
            // otherwise the absolute position never updates from the original start position
            .then(() => {
                const newKnightPosition = Animate.getKnightPosition();
                knight.remove();

                // first iteration
                if (startPosition) {
                    startPosition.appendChild(
                        create("div", { class: "marker", tc: "start" }),
                    );
                }

                // last iteration
                if (!dCoords.length) {
                    newKnightPosition.removeChild(
                        newKnightPosition.firstElementChild,
                    );
                    newKnightPosition.classList.remove("destination");
                } else {
                    newKnightPosition.appendChild(
                        create("div", { class: "marker", tc: `${i}` }),
                    );
                }

                new DraggableKnight(newKnightPosition);
                Animate.transitionDCoords(dCoords, path, i + 1);
            });
    }

    static clearPreviousMarkers(): void {
        const markers: NodeListOf<HTMLElement> =
            document.querySelectorAll(".marker")!;
        markers.forEach((marker) => {
            marker.remove();
        });
    }

    // keep the movement speed the same when moving 1 square or 2 squares
    static modifyTransitionDuration(
        dCoord: number,
        originalDuration: number,
        knight: HTMLElement,
    ): void {
        knight.style.transitionDuration = `${
            originalDuration * Math.abs(dCoord)
        }ms`;
    }

    static getKnightTransitionTime(): number | any {
        const knight = DOM.getKnight();
        const transitionDuration: string =
            window.getComputedStyle(knight).transitionDuration;

        return parseFloat(transitionDuration) * 1000;
    }

    // knight is absolutely positioned.  knight.parentElement won't work to get the new position
    static getKnightPosition() {
        const knight = DOM.getKnight();
        const kPosition = knight.getBoundingClientRect();

        const squares = DOM.getAllSquares();
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

    static updateMessage(): void {
        const path = Coords.getShortestPath();
        if (!path) {
            return;
        }

        const pathDesc = DOM.getPathDesc();
        const pathCoords = DOM.getPathCoords();
        const steps = path.length - 1;

        // prettier-ignore
        const descText = 
            `The shortest path from ${Coords.getLetterCoords(path[0])} to ${Coords.getLetterCoords(path[path.length - 1])} is ${steps} steps`;

        let coordText = "";
        for (let i = 0; i < path.length; i++) {
            const letterCoord = Coords.getLetterCoords(path[i]);
            if (i === path.length - 1) {
                coordText += `${letterCoord}`;
            } else {
                coordText += `${letterCoord} > `;
            }
        }

        pathDesc.textContent = descText;
        pathCoords.textContent = coordText;
    }
}

export class Coords {
    static updateInputValue(): void {
        const startInput = DOM.getStartCoordInput();
        const destInput = DOM.getDestCoordInput();

        const start: string = Coords.getStartString();
        const dest: string | null = Coords.getDestString();

        startInput.value = start;
        dest ? (destInput.value = dest) : (destInput.value = "");
    }

    static updateLocationFromInput(
        className: string,
        inputValue: string,
    ): void {
        const squares = DOM.getAllSquares();
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

        const startInput = DOM.getStartCoordInput();
        const destInput = DOM.getDestCoordInput();

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

        if (
            Coords.inputIsValid(startInput.value) &&
            Coords.inputIsValid(destInput.value)
        ) {
            const path = shortestPath(Coords.getStart(), Coords.getDest());
            Animate.updateMessage();
        }
    }

    static getStart(): number[] | any {
        return Coords.getCoords("start-location");
    }

    static getStartString(): string {
        const coords = Coords.getStart();
        return Coords.getLetterCoords(coords);
    }

    static getDest(): number[] | any {
        return Coords.getCoords("destination");
    }

    static getDestString(): string {
        const coords = Coords.getDest();
        return Coords.getLetterCoords(coords);
    }

    static getCoords(targetClass: string): number[] | any {
        const squares = DOM.getAllSquares();

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

    static getLetterCoords(coords: number[]): string | any {
        const letters = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
        if (!coords) {
            return null;
        }
        return `${letters[coords[0]]}${coords[1]}`;
    }

    static getShortestPath(): number[][] | any {
        const startCoord = Coords.getStart();
        const destCoord = Coords.getDest();

        if (!startCoord || !destCoord) {
            return null;
        }

        return shortestPath(startCoord, destCoord);
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

    static setDestination(
        e: any,
        parentElement: HTMLElement | null = null,
    ): void {
        Animate.clearPreviousMarkers();

        const locations = DOM.getAllSquares();

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
        Animate.updateMessage();
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
        knightImage.onclick = () => Animate.clearPreviousMarkers();

        // make sure there is only one location with the start location class
        this.removeGlobalClassName("start-location", ".square");
        parentElement.classList.add("start-location");
        parentElement.appendChild(knightImage);
    }

    setClick(e: any) {
        const knight = DOM.getKnight();

        // set the mouseDown property if mousedown or mouseup on knight
        // dragKnight changes location of the knight piece based on the cursor position

        if (e.type === "mousedown") {
            this.mouseDown = true;
            knight.style.cursor = "grab";
            document.body.addEventListener("mousemove", this.dragKnight);
            Animate.clearPreviousMarkers();
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
        DOM.getKnight().remove();

        // originalStartPoint is where the knight will be appended if its not in a valid spot upon placement
        // const originalStartPoint: HTMLElement =
        //     document.querySelector(".start-location")!;
        const originalStartPoint = DOM.getStartLocationSquare();

        // check to see if the knight has traveled out of bounds of the chess board
        // if it is out of bounds, append a new knight to the originalStartPoint
        const chessBoard = DOM.getChessboard();
        if (!this.isWithinElement(e, chessBoard)) {
            new DraggableKnight(originalStartPoint);
            return;
        }

        const locations = DOM.getAllSquares();
        locations.forEach((location) => {
            if (this.isWithinElement(e, location)) {
                if (this.isValidDropLoc(location)) {
                    // knight is within the bounds of the specified square AND is on a valid drop point
                    // append a new knight to the specified square
                    new DraggableKnight(location);
                    Animate.updateMessage();
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
        const squares = DOM.getAllSquares();
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
