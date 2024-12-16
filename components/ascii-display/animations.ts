let zBuffer: number[] = []; // zBuffer is used by cube and donut
let thetaA: number = 0;
let thetaB: number = 0;
let thetaC: number = 0;

// collection of animations for use with AsciiDisplay

// BEGIN CUBE
const cube_calc_x = (i: number, j: number, k: number, 
                    sinA: number, sinB: number, sinC: number, 
                    cosA: number, cosB: number, cosC: number) => {
    return (
        j * sinA * sinB * cosC - k * cosA * 
        sinB * cosC + j * cosA * sinC + k * 
        sinA * sinC + i * cosB * cosC
    );
  }
  
const cube_calc_y = (i: number, j: number, k: number, 
                    sinA: number, sinB: number, sinC: number, 
                    cosA: number, cosB: number, cosC: number) => {
    return (
        j * cosA * cosC + k * sinA * cosC -
        j * sinA * sinB * sinC + k * cosA * 
        sinB * sinC - i * cosB * sinC
    );
}
  
const cube_calc_z = (i: number, j: number, k: number, 
                sinA: number, sinB: number,
                cosA: number, cosB: number ) => {
    return (
        k * cosA * cosB - j * 
        sinA * cosB + i * sinB
    );
}

const cube_calc_for_surface = (frameBuffer: string[], zBuffer: number[], 
                        cubeX: number, cubeY: number, cubeZ: number, 
                        ch: string, width: number, height: number) => {

    const distanceFromCamera: number = 100;  // adjust to change size
    const K1: number = 40; // screen distance for scaling
    
    // precompute trig functions i believe it should reduce cpu usage
    // and stop turning my laptop into a jet engine
    const sinA: number = Math.sin(thetaA);
    const sinB: number = Math.sin(thetaB);
    const sinC: number = Math.sin(thetaC);
    const cosA: number = Math.cos(thetaA);
    const cosB: number = Math.cos(thetaB);
    const cosC: number = Math.cos(thetaC);

    const x: number = cube_calc_x(cubeX, cubeY, cubeZ, sinA, sinB, sinC, cosA, cosB, cosC);
    const y: number = cube_calc_y(cubeX, cubeY, cubeZ, sinA, sinB, sinC, cosA, cosB, cosC);
    const z: number = cube_calc_z(cubeX, cubeY, cubeZ, sinA, sinB, cosA, cosB) + distanceFromCamera;

    let ooz: number = 1 / z;

    const xp: number = Math.floor(width / 2 +  K1 * ooz * x * 2);
    const yp: number = Math.floor(height / 2 + K1 * ooz * y);

    const index: number = xp + yp * width;
    
    if (index >= 0 && index < width * height) {
        if (ooz > zBuffer[index]) {
    	    zBuffer[index] = ooz;
    	    frameBuffer[index] = ch;
        }
    }
    return;
}

export const cube_init = (width: number, height: number) => {
    const buffer: string[] = []
    for (let i = 0; i < width * height; i++) {
        zBuffer.push(0);
        buffer.push(' ');
    }
    return buffer;
}

export const cube_next_frame = (frameBuffer: string[], width: number, height: number) => {
    for (let i = 0; i < width * height; i++) {
        frameBuffer[i] = ' ';
        zBuffer[i] = 0;
    }

    const incrementSpeed: number = 0.6;
    const cubeWidth: number = 15;

    for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
        for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
            cube_calc_for_surface(frameBuffer, zBuffer, cubeX, cubeY, -cubeWidth, '*', width, height);
            cube_calc_for_surface(frameBuffer, zBuffer, cubeWidth, cubeY, cubeX, '$', width, height);
            cube_calc_for_surface(frameBuffer, zBuffer, -cubeWidth, cubeY, -cubeX, '0', width, height);
            cube_calc_for_surface(frameBuffer, zBuffer, -cubeX, cubeY, cubeWidth, '#', width, height);
            cube_calc_for_surface(frameBuffer, zBuffer, cubeX, -cubeWidth, -cubeY, ':', width, height);
            cube_calc_for_surface(frameBuffer, zBuffer, cubeX, cubeWidth, cubeY, '+', width, height);
        }
    }

    thetaA += 0.05;
    thetaB += 0.05;
    thetaC += 0.01;
    return frameBuffer;
}

// END CUBE


// BEGIN CONWAY
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

export const evolve = (frameBuffer: string[], width: number, height: number) => {
    const changed: string[] = [];
    for (let i = 0; i < width * height; i++) {
        changed.push(next_state(frameBuffer, width, height, i)); // change later
    }

    return changed;
}

// END CONWAY