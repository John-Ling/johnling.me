// collection of animations for use with AsciiDisplay

// functions for conway's game of life
// creates a grid with randomly assigned cells for use in conway's game of life

const conwayAlive: string = '*';
const conwayDead: string = ' ';

export const conway_populate = (width: number, height: number) => {
    const grid: string[] = [];
    const minCeiled: number = Math.ceil(0);
    const maxFloored: number = Math.floor(3);
    for (let i = 0; i < width * height; i++) {
        const chance: number = Math.floor(
            Math.random() * (maxFloored - minCeiled) + minCeiled
        );
        if (chance < 2) {
          grid.push(conwayDead)
          continue;
        }
        grid.push(conwayAlive);
      }
    return grid;
  }

// returns the next state of a cell based on it's neighbourhood
const next_state = (frameBuffer: string[], width: number, height: number, position: number) => {
    // get position in frameBuffer as 2 indexes
    const row = Math.floor(position / width);
    const column = position % width;

    const initialState: string = frameBuffer[position];
    let finalState: string = conwayDead;  // assume dead
    let aliveCount: number = 0;

    for (let i = -1; i <= 1; i++) {
        if (row + i < 0 || row + i >= height) {
            continue
        }

        for (let j = -1; j <= 1; j++) {
            // don't include own cell as part of neighbourhood
            if (i == 0 && j == 0) {
                continue;
            }

            if (column + j < 0 || column + j >= width) {
                continue;
            }

            if (frameBuffer[(row + i) * width + (column + j)] == conwayAlive) {
                aliveCount++;
            }
        }   
    }

    // if dead
    if (initialState == conwayDead) {
        if (aliveCount == 3) {
            finalState = conwayAlive;
        }
    } else if (aliveCount == 2 || aliveCount == 3)  {
        finalState = conwayAlive;
    }

    // other conditions 1. and 3. result in death so we don't need to set
    return finalState;
}

export const evolve = (frameBuffer: string[], size: number) => {
    const changed: string[] = [];
    for (let i = 0; i < size; i++) {
        changed.push(next_state(frameBuffer, 95, 26, i)); // change later
    }

    return changed;
}