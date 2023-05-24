export function testStatus(cell) {
    const aliveNeighborsCount = cell.neighbors.filter(neighbor => neighbor.status === 1). length
    const currentCell = cell.cell.status;

    if (aliveNeighborsCount === 2 || aliveNeighborsCount === 3) {
        return 1;
    }

    if (currentCell === 1 && aliveNeighborsCount < 2) {
        return 0;
    }

    if (currentCell === 1 && aliveNeighborsCount > 3) {
        return 0;
    }

    if (currentCell === 0 && aliveNeighborsCount === 3) {
        return 1;
    }
}