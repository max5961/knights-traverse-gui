import { DestMarker, Coords, Animate } from "./controller";
import { createElement as create } from "./createElement";

export class Build {
    static boardContainer(): HTMLElement {
        return (
            // prettier-ignore
            create("div", { class: "board-container" },
                create("div", { class: "empty-space" }),
                Build.letterCoords(),
                create("div", { class: "empty-row" }),
                Build.numberCoords(),
                Build.chessBoard(),
                create("div", { class: "empty-space" })
            )
        );
    }

    static letterCoords(): HTMLElement {
        const letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
        // prettier-ignore
        const letterCoords: HTMLElement = create("div", { class: "coordinates letters" });
        for (const letter of letters) {
            letterCoords.appendChild(
                create("div", { class: "letter-coord", tc: `${letter}` }),
            );
        }

        return letterCoords;
    }

    static numberCoords(): HTMLElement {
        // prettier-ignore
        const numberCoords: HTMLElement = create("div", { class: "coordinates numbers" })
        for (let i = 1; i <= 8; i++) {
            numberCoords.appendChild(
                create("div", { class: "number-coord", tc: `${i.toString()}` }),
            );
        }

        return numberCoords;
    }

    // prettier-ignore
    static chessBoard(): HTMLElement {
        const board: HTMLElement = create("div", { class: "chess-board" });

        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                if (i % 2 === 0) {
                    if (j % 2 === 0) {
                        board.appendChild(create("div", { class: "square light", coord: `${j}-${i}` }));
                    } else {
                        board.appendChild(create("div", { class: "square dark", coord: `${j}-${i}` }));
                    }
                } else {
                    if (j % 2 === 0) {
                        board.appendChild(create("div", { class: "square dark", coord: `${j}-${i}` }));
                    } else {
                        board.appendChild(create("div", { class: "square light", coord: `${j}-${i}` }));
                    }
                }
            } 
        }

        const locations: HTMLCollection = board.children;
        for (let i = 0; i < locations.length; i++) {
            const square = locations.item(i);
            square?.addEventListener("click", DestMarker.setDestination);
        }

        return board;
    }

    // prettier-ignore
    static destinationMarker(): HTMLElement {
        return (
            create("div", { class: "destination-marker" },
                create("div", { class: "section" }),
                create("div", { class: "section top" },
                    create("div", { class: "leg top" })
                ),
                create("div", { class: "section" }),
                create("div", { class: "section left" },
                    create("div", { class: "leg left" })
                ),
                create("div", { class: "section" }),
                create("div", { class: "section right" },
                    create("div", { class: "leg right" })
                ),
                create("div", { class: "section" }),
                create("div", { class: "section bottom" },
                    create("div", { class: "leg bottom" })
                ),
                create("div", { class: "section" }),
            )
        )
    }

    // prettier-ignore
    static mainForm(): HTMLElement {
        return (
            create("form", { id: "run-coords" },
                create("div", { class: "input-container start" },
                    create("label", { for: "start-coord", tc: "Start:" }),
                    create("input", { id: "start-coord", type: "text", name: "start-coord", spellcheck: "false",
                        evl: { "input": Coords.validateInput } })
                ),
                create("div", { class: "input-container destination" },
                    create("label", { for: "destination-coord", tc: "Destination:" }),
                    create("input", { id: "destination-coord", type: "text", name: "destination-coord", spellcheck: "false",
                        evl: { "input": Coords.validateInput } })
                ),
                create("div", { class: "previous-path" },
                    create("span", { class: "path-desc", tc: "" }),
                    create("span", { class: "path-coords", tc: "" })
                    ),
                create("button", { class: "run-coords", tc: "ANIMATE",
                    evl: { "click": Animate.moveAlongPath }}),
            )
        );
    }
}
