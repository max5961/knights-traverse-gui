// prettier-ignore
export function shortestPath(start: number[], dest: number[]): any {
    const moves: number[][] = [
        [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]
    ]

    const arr: any = [start];
    const pathMap: any = {}
    const visited = new Set();

    while (arr.length) {
        const currCoord = arr.shift();
        const [x, y] = currCoord;
        if (x === dest[0] && y === dest[1]) {
            return getPath(pathMap, start, dest);
        }

        for (const move of moves) {
            const [dx, dy] = move;
            const nx = x + dx;
            const ny = y + dy;
            
            if (isValid([nx, ny])) {
                if (!visited.has([nx, ny].toString())) {
                    visited.add([nx, ny].toString());
                    arr.push([nx, ny]);
                    pathMap[[nx, ny].toString()] = [x, y];
                }
            }
        }
    }

    return null;
}

function getPath(pathMap: any, start: number[], dest: number[]): number[][] {
    const path: any = [dest];
    let curr = dest.toString();
    while (curr.toString() !== start.toString()) {
        path.unshift(pathMap[curr.toString()]);
        curr = pathMap[curr.toString()];
    }

    return path;
}

function isValid(coord: number[]): boolean {
    const [x, y] = coord;
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}
