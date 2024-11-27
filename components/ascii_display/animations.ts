// collection of animations for use with AsciiDisplay

// functions for conway's game of life

// creates a grid with randomly assigned cells for use in conway's game of life
export const conway_populate = (width: number, height: number) => {
    let grid: string[][] = [];
    const minCeiled: number = Math.ceil(0);
    const maxFloored: number = Math.floor(3);
    for (let i = 0; i < height; i++) {
      let buffer: string[] = [];
      for (let j = 0; j < width; j++) {
        let chance: number = Math.floor(
          Math.random() * (maxFloored - minCeiled) + minCeiled
        );

        if (chance < 2) {
          buffer.push(' ');
          continue;
        }
        buffer.push('*');
      }
      grid.push(buffer)
    }
    return grid;
  }

// returns the next state of a cell based on it's neighbourhood
const next_state = (grid: string[][], indexI: number, indexJ: number) => {
    const initialState: string = grid[indexI][indexJ];
    const height: number = grid.length;
    const width: number = grid[0].length;

    let finalState = ' ';  // assume dead
    let aliveCount: number = 0;

    for (let i = -1; i <= 1; i++) {
        if (indexI + i < 0 || indexI + i >= height) {
            continue;
        }

        for (let j = -1; j <= 1; j++) {
            if (indexJ + j < 0 || indexJ + j >= width) {
                continue;
            }

            // don't include own cell as part of neighbourhood
            if (i == 0 && j == 0) {
                continue;
            }

            if (grid[indexI + i][indexJ + j] == '*') {
                aliveCount++;
            }
        }
    }

    // if dead
    if (initialState == ' ') {
        if (aliveCount == 3) {
            finalState = '*';
        }
    } else {
        if (aliveCount == 2 || aliveCount == 3) {
            finalState = '*';
        }
        // other conditions 1. and 3. result in death so we don't need to set
    }
    return finalState;
}

export const evolve = (grid:string[][]) => {
    const height: number = grid.length;
    const width: number = grid[0].length;
    let changedCells: string[] = [];
    let changeCount: number = 0;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            changedCells.push(next_state(grid, i, j));
            changeCount++;
        }
    }

    changeCount = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            grid[i][j] = changedCells[changeCount];
            changeCount++;
        }
    }
    return grid;
}