import { Build } from "./view";

export function insertMarker(parentElement: HTMLElement | ChildNode): void {
    parentElement.appendChild(Build.destinationMarker());

    const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(".leg")!;
    nodes.forEach((node) => {
        if (node.className === "leg top" || node.className === "leg bottom") {
            node.style.height = "100%";
        } else {
            node.style.width = "100%";
        }
    });
}

export function setDestination(e: any): void {
    const locations: NodeListOf<HTMLElement> = document.querySelectorAll(
        ".chess-board .square",
    );

    locations.forEach((node) => {
        if (node.classList.contains("destination")) {
            node.classList.remove("destination");
            node.removeChild(node.firstChild!);
        }
    });

    e.target.classList.add("destination");
    e.target.appendChild(Build.destinationMarker());

    setTimeout(() => {
        const legs: NodeListOf<HTMLElement> = document.querySelectorAll(".leg");
        legs.forEach((leg) => {
            if (
                leg.classList.contains("top") ||
                leg.classList.contains("bottom")
            ) {
                leg.style.height = "100%";
            } else {
                leg.style.width = "100%";
            }
        });
    }, 0);
}
