// prettier-ignore
export function shortestPath(start: number[], dest: number[]): number[][] | any {
    const moves: number[][] = [
        [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]
    ]

    const queue = new Queue(start);
    const pathMap: any = {}
    const visited = new Set();

    while (queue.size) {
        const currCoord = queue.dequeue();
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
                    queue.enqueue([nx, ny]);
                    pathMap[[nx, ny].toString()] = [x, y];
                }
            }
        }
    }

    return null;
}

function getPath(pathMap: any, start: number[], dest: number[]): number[][] {
    const path = [dest];
    let curr = dest.toString();

    while (curr !== start.toString()) {
        path.unshift(pathMap[curr]);
        curr = pathMap[curr].toString();
    }

    return path;
}

function isValid(coord: number[]): boolean {
    const [x, y] = coord;
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}

export class Queue {
    items: [string: number[]] | any;
    rear: number;
    front: number;
    size: number;

    constructor(coord: number[] | null = null) {
        this.items = {};
        this.rear = 0;
        this.front = 0;
        this.size = 0;
        this.init(coord);
    }

    init(coord: number[] | null = null): void {
        if (coord) {
            this.enqueue(coord);
        }
    }

    enqueue(coord: number[] | null): void {
        this.items[this.rear] = coord;
        this.rear++;
        this.size++;
    }

    dequeue(): number[] | any {
        if (this.size) {
            const coord = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            this.size--;
            return coord;
        }
    }
}
