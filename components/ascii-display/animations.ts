// globals used by more than one animation

let zBuffer: number[][] = []; // zBuffer is used by cube and donut

// rotation angles for cube and donut
let thetaA: number = 0;
let thetaB: number = 0;
let thetaC: number = 0;

function reset_animations() {
    zBuffer = [];
    thetaA = 0;
    thetaB = 0;
    thetaC = 0;
    return;
}

// collection of animations for use with AsciiDisplay

// BEGIN CUBE

export function cube_init(width: number, height: number) {
    zBuffer = Array(height).fill(null).map(() => Array(width).fill(0));
    return Array(height).fill(null).map(() => Array(width).fill(' '));
}

export function cube_next_frame(framebuffer: string[][], width: number, height: number) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            framebuffer[i][j] = ' ';
            zBuffer[i][j] = 0;
        }   
    }

    const incrementSpeed: number = 1;
    const cubeWidth: number = 15;
    thetaA += 0.05;
    thetaB += 0.05;
    thetaC += 0.01;

    // precompute trig functions i believe it should reduce cpu usage
    // and stop turning my laptop into a jet engine
    const sinA: number = Math.sin(thetaA);
    const sinB: number = Math.sin(thetaB);
    const sinC: number = Math.sin(thetaC);
    const cosA: number = Math.cos(thetaA);
    const cosB: number = Math.cos(thetaB);
    const cosC: number = Math.cos(thetaC);

    for (let cubeX = -cubeWidth; cubeX < cubeWidth; cubeX += incrementSpeed) {
        for (let cubeY = -cubeWidth; cubeY < cubeWidth; cubeY += incrementSpeed) {
            cube_calc_for_surface(framebuffer, zBuffer, cubeX, cubeY, -cubeWidth, '*', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);

            cube_calc_for_surface(framebuffer, zBuffer, cubeWidth, cubeY, cubeX, '$', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);

            cube_calc_for_surface(framebuffer, zBuffer, -cubeWidth, cubeY, -cubeX, '0', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);

            cube_calc_for_surface(framebuffer, zBuffer, -cubeX, cubeY, cubeWidth, '#', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);
                                    
            cube_calc_for_surface(framebuffer, zBuffer, cubeX, -cubeWidth, -cubeY, ':', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);

            cube_calc_for_surface(framebuffer, zBuffer, cubeX, cubeWidth, cubeY, '+', 
                                    width, height, sinA, sinB, sinC, cosA, cosB, cosC);
        }
    }

    
    return framebuffer;
}

export function cube_cleanup() {
    reset_animations();
    return;
}

function cube_calc_x(i: number, j: number, k: number, 
                    sinA: number, sinB: number, sinC: number, 
                    cosA: number, cosB: number, cosC: number) {
    return (
        j * sinA * sinB * cosC - k * cosA * 
        sinB * cosC + j * cosA * sinC + k * 
        sinA * sinC + i * cosB * cosC
    );
}

function cube_calc_y(i: number, j: number, k: number, 
                    sinA: number, sinB: number, sinC: number, 
                    cosA: number, cosB: number, cosC: number) {
    return (
        j * cosA * cosC + k * sinA * cosC -
        j * sinA * sinB * sinC + k * cosA * 
        sinB * sinC - i * cosB * sinC
    );
}

function cube_calc_z(i: number, j: number, k: number, 
                    sinA: number, sinB: number,
                    cosA: number, cosB: number ) {
    return (
        k * cosA * cosB - j * 
        sinA * cosB + i * sinB
    );
}

function cube_calc_for_surface(framebuffer: string[][], zBuffer: number[][], 
                            cubeX: number, cubeY: number, cubeZ: number, 
                            ch: string, width: number, height: number,
                            sinA: number, sinB: number, sinC: number,
                            cosA: number, cosB: number, cosC: number) {

    const distanceFromCamera: number = 100;  // adjust to change size
    const K1: number = 40; // screen distance for scaling
    const x: number = cube_calc_x(cubeX, cubeY, cubeZ, sinA, sinB, sinC, cosA, cosB, cosC);
    const y: number = cube_calc_y(cubeX, cubeY, cubeZ, sinA, sinB, sinC, cosA, cosB, cosC);
    const z: number = cube_calc_z(cubeX, cubeY, cubeZ, sinA, sinB, cosA, cosB) + distanceFromCamera;

    const ooz: number = 1 / z;

    const xp: number = Math.floor(width / 2 +  K1 * ooz * x * 2);
    const yp: number = Math.floor(height / 2 + K1 * ooz * y);

                
    if (xp < 0 || xp >= width || yp < 0 || yp >= height) {
    return;
    }

    if (ooz > zBuffer[yp][xp]) {
    zBuffer[yp][xp] = ooz;
    framebuffer[yp][xp] = ch;
    }
    return;
}


// END CUBE

// BEGIN BAPPLE

import JSZip from 'jszip';

let currentFrame: number = 0; // index into frames array
let frames: string[] = [];

// downloads and unzips file containing 
// frames
export async function bapple_init() {
    // if frames have already been unzipped
    if (frames[0] !== undefined) {
        return;
    }
    // change this to actual domain later
    const zip: Response = await fetch("https://www.johnling.me/frames.zip");
    const content: Blob = await zip.blob();
    const jsZip = new JSZip();
    const file = await jsZip.loadAsync(content);
    const frameString: string = await file.file("frames.txt")!.async("string");
    frames = await frameString.split("\n");
    currentFrame = 0;
    return;
}

export function bapple_next_frame(framebuffer: string[][], width: number, height: number) {
    // if animation has not unzipped yet or already finished
    if (frames[currentFrame] === undefined) {
        return Array(height).fill(null).map(() => Array(width).fill('*'))
    }

    const frame: string = frames[currentFrame];
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            framebuffer[i][j] = frame[(i * width) + j]
        }
    }

    currentFrame += 1;
    return framebuffer;
}

export function bapple_cleanup() {
    currentFrame = 0;
    return;
}

// END BAPPLE

// BEGIN DONUT

// r1 = radius
// r2 = donut is centered at point (r2, 0, 0)

function donut_calc_x(r1: number, r2: number, sinTheta: number, sinPhi: number, cosTheta: number, 
                    cosPhi: number, sinA: number, sinB: number, cosA: number, cosB: number, 
                    circleX: number, circleY: number) {
    return circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
}

function donut_calc_y(r1: number, r2: number, sinTheta: number, sinPhi: number, cosTheta: number, 
                    cosPhi: number, sinA: number, sinB: number, cosA: number, cosB: number, 
                    circleX: number, circleY: number) {
    return circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
}

function donut_calc_z(r1: number, r2: number, sinTheta: number, sinPhi: number, cosTheta: number, 
                    sinA: number, cosA: number, circleX: number, circleY: number) {
    return cosA * circleX * sinPhi + circleY * sinA;
}



function donut_calc_for_surface(framebuffer: string[][], zBuffer: number[][], width: number, height: number, 
                                r1: number, r2: number, sinA: number, sinB: number, cosA: number,
                                cosB: number, sinTheta: number, sinPhi: number, cosTheta: number,
                                cosPhi: number, circleX: number, circleY: number) {

    const distanceFromCamera: number = 70;  // adjust to change size
    // const K1: number = width * distanceFromCamera * 3 / (8* (r1+r2));
    const K1 = 80;// screen distance for scaling
    // const K1: number = 25; 

    const x: number = donut_calc_x(r1, r2, sinTheta, sinPhi, cosTheta, cosPhi, sinA, sinB, cosA, cosB, circleX, circleY);
    const y: number = donut_calc_y(r1, r2, sinTheta, sinPhi, cosTheta, cosPhi, sinA, sinB, cosA, cosB, circleX, circleY);
    const z: number = donut_calc_z(r1, r2, sinTheta, sinPhi, cosTheta, sinA, cosA, circleX, circleY) + distanceFromCamera;

    const ooz: number = 1 / z;

    const xp: number = Math.floor(width / 2 +  K1 * ooz * x);
    const yp: number = Math.floor(height / 2 - K1 * ooz * y);


    if (xp < 0 || xp >= width || yp < 0 || yp >= height) {
        return;
    }

    // calculate brightness / luminance of pixel
    const luminance: number = cosPhi * cosTheta * sinB - 
                            cosA * cosTheta * sinPhi - sinA * 
                            sinTheta + cosB * 
                            (cosA * sinTheta - cosTheta * sinA * sinPhi);
    if (luminance <= 0) {
        return;
    }
                                  
    if (ooz > zBuffer[yp][xp]) {
        zBuffer[yp][xp] = ooz;
        // set correct character for frame buffer
        const luminanceIndex = Math.floor(luminance * 8);
        framebuffer[yp][xp] = ".,-~:;=!*#$@"[luminanceIndex];
    }

    return;
}

export function donut_init(width: number, height: number) {
    zBuffer = Array(height).fill(null).map(() => Array(width).fill(0));
    return Array(height).fill(null).map(() => Array(width).fill(' '));
}

export function donut_next_frame(framebuffer: string[][], width: number, height: number) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            framebuffer[i][j] = ' ';
            zBuffer[i][j] = 0;
        }   
    }

    const R1: number = 10;
    const R2: number = 20;

    const thetaSpacing: number = 0.07;
    const phiSpacing: number = 0.02;

    const sinA: number = Math.sin(thetaA);
    const sinB: number = Math.sin(thetaB);
    const cosA: number = Math.cos(thetaA);
    const cosB: number = Math.cos(thetaB);

    for (let theta = 0; theta < 6.28; theta += thetaSpacing) {
        const sinTheta: number = Math.sin(theta);
        const cosTheta: number = Math.cos(theta);
        for (let phi = 0; phi < 6.28; phi += phiSpacing) {
            const sinPhi: number = Math.sin(phi);
            const cosPhi: number = Math.cos(phi);

            const circleX: number = R2 + R1 * cosTheta;
            const circleY: number = R1 * sinTheta;

            donut_calc_for_surface(framebuffer, zBuffer, width, height, R1, R2, sinA, sinB, 
                                cosA, cosB, sinTheta, sinPhi, cosTheta, cosPhi, circleX, circleY);
        }
    }

    thetaA += 0.04;
    thetaB += 0.02;
    return framebuffer;
}

export function donut_cleanup() {
    reset_animations();
    return;
}

// END DONUT

// BEGIN MATRIX

let streams: MatrixStream[] = [];

interface MatrixStream {
    position: number; // position of front (bottom character) on screen
    speed: number;
    length: number;
    chars: string[];
}

export function matrix_init(width: number, height: number) {
    // generate initial matrix streams
    for (let i = 0; i < width; i++) {
        const stream: MatrixStream = generate_stream();
        streams.push(stream);
    }

    return Array(height).fill(null).map(() => Array(width).fill(' '))
}

export function matrix_next_frame(framebuffer: string[][], width: number, height: number) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            framebuffer[i][j] = ' ';
        }   
    }

    streams.forEach((stream: MatrixStream, x: number) => {
        stream.position += stream.speed;

        // reset stream if fully below screen
        if (stream.position - stream.length > height) {
            streams[x] = generate_stream();
            return;
        }

        // otherwise render stream on the framebuffer
        for (let i = 0; i < stream.length; i++) {
            const y: number = stream.position - i;
            if (y >= 0 && y < height) {
                framebuffer[y][x]    = stream.chars[i];
            }
        }

        // change front character to random character
        // emulating the effect in cmatrix
        // stream.chars[0] = random_char();
    });

    return framebuffer;
}

export function matrix_cleanup() {
    streams = [];
    return;
}

// random ascii char from the readable range 33 to 126
// no ESC or NEWLINE or CARRIAGE RETURN nonsense
function random_char() {
    return String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
}

function generate_stream() {
    const stream: MatrixStream = {position: 0, speed: 0, length: 0, chars: []};
    
    stream.position = 0 - Math.floor(Math.random() * 20);
    stream.speed = 1 + Math.floor(Math.random() * 2);
    // stream.speed = 1;
    stream.length = Math.floor(Math.random() * 15) + 5;
    
    // generate random characters for stream
    for (let i = 0; i < stream.length; i++) {
        stream.chars.push(random_char());
        // stream.chars.push('*');
    }

    return stream;
}

// END MATRIX

// BEGIN CONWAY
// creates a grid with randomly assigned cells for use in conway's game of life

const conwayAlive: string = '*';
const conwayDead: string = ' ';

export function conway_populate(width: number, height: number) {
    const grid: string[][] = [];
    const minCeiled: number = Math.ceil(0);
    const maxFloored: number = Math.floor(3);
    for (let i = 0; i < height; i++) {
        const row: string[] = [];
        for (let j = 0; j < width; j++) {
            const chance: number = Math.floor(
                Math.random() * (maxFloored - minCeiled) + minCeiled
            );
            if (chance < 2) {
              row.push(conwayDead);
              continue;
            }
            row.push(conwayAlive);
        }
        grid.push(row);
      }
    return grid;
  }

// returns the next state of a cell based on it's neighbourhood
function next_state(framebuffer: string[][], width: number, height: number, positionI: number, positionJ: number) {
    // get position in framebuffer as 2 indexes
    // const row = Math.floor(position / width);
    // const column = position % width;

    const initialState: string = framebuffer[positionI][positionJ];
    let finalState: string = conwayDead;  // assume dead
    let aliveCount: number = 0;

    for (let i = -1; i <= 1; i++) {
        if (positionI + i < 0 || positionI + i >= height) {
            continue
        }

        for (let j = -1; j <= 1; j++) {
            // don't include own cell as part of neighbourhood
            if (i == 0 && j == 0) {
                continue;
            }

            if (positionJ + j < 0 || positionJ + j >= width) {
                continue;
            }

            if (framebuffer[(positionI + i)][(positionJ + j)] == conwayAlive) {
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

export function conway_next_frame(framebuffer: string[][], width: number, height: number) {
    const changed: string[][] = [];
    for (let i = 0; i < height; i++) {
        const row: string[] = [];
        for (let j = 0; j < width; j++) {
            row.push(next_state(framebuffer, width, height, i, j));
        }
        changed.push(row);
    }
    return changed;
}

export const conway_cleanup = () => {
    // nothing to clean up
    return;
}

// END CONWAY