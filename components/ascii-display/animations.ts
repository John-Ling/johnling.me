import { Canvas } from "@/types/hero/Canvas";
import JSZip from "jszip";

let currentFrame = 0;
let frames: string[] = [];

// downloads and unzips file containing
// frames
export async function bapple_init() {
	// if frames have already been unzipped
	if (frames[0] !== undefined) {
		return;
	}

	const zip: Response = await fetch(
		process.env.NODE_ENV === "production" ? "https://www.johnling.me/frames.zip" : "http://localhost:3000/frames.zip",
	);
	const content: Blob = await zip.blob();
	const jsZip = new JSZip();
	const file = await jsZip.loadAsync(content);
	const frameString: string = await file.file("frames.txt")!.async("string");
	frames = await frameString.split("\n");

	// return dummy canvas
	return [[]] as Canvas;
}

export function bapple_next_frame(framebuffer: string[][], width: number, height: number, skipToFrame?: number) {
	// if animation has not unzipped yet or already finished
	if (frames[currentFrame] === undefined) {
		return Array(height)
			.fill(null)
			.map(() => Array(width).fill("8"));
	}

	// Only skip to a specific frame once
	if (skipToFrame) {
		currentFrame = skipToFrame;
	}

	const frame: string = frames[currentFrame];
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			framebuffer[i][j] = frame[i * width + j];
		}
	}

	currentFrame++;
	return framebuffer;
}

export function bapple_cleanup() {
	return;
}

interface LorenzPoint {
	x: number;
	y: number;
	z: number;
	char: string;
	currentGeneration: number;
}

const randomFromIntervals = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// add some noise initial conditions for unique patterns

const sigma = 10;

// magic number is derived from the fact that
// butterfly pattern is formed from p > 24.74
const rho = 28 + randomFromIntervals(-1, 1);
const beta = 8 / 3;
const dt = 0.01;

let lorenzPoints: LorenzPoint[] = [];
let lorenzPointCount = 0;
const lorenzChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let decay = false;
let currentGeneration = 0;

export function lorenz_init(width: number, height: number) {
	lorenzPoints = [{ x: 0.1, y: 0, z: 0, char: lorenzChars[lorenzChars.length - 1], currentGeneration: 0 }];
	lorenzPointCount = 1;
	decay = false;
	currentGeneration = 0;

	// Decrease startup time be pre-generating points

	for (let i = 0; i < 20; i++) {
		render_next_lorenz_point();
	}

	return Array(height)
		.fill(null)
		.map(() => Array(width).fill(" "));
}

function render_next_lorenz_point() {
	const currentPoint = lorenzPoints.at(-1);
	if (currentPoint === undefined) {
		return;
	}

	const x = currentPoint?.x;
	const y = currentPoint?.y;
	const z = currentPoint?.z;

	const dx = sigma * (y - x) * dt;
	const dy = (x * (rho - z) - y) * dt;
	const dz = (x * y - beta * z) * dt;

	lorenzPoints.push({
		x: currentPoint.x + dx,
		y: currentPoint.y + dy,
		z: currentPoint.z + dz,
		char: lorenzChars[lorenzChars.length - 1],
		currentGeneration: currentGeneration,
	});
	lorenzPointCount++;
}

export function lorenz_next_frame(framebuffer: string[][], width: number, height: number) {
	render_next_lorenz_point();

	// Clear screen to render points again
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			framebuffer[y][x] = " ";
		}
	}

	if (lorenzPointCount >= 1500 && !decay) {
		decay = true;
	}

	if (decay) {
		lorenzPoints.shift();
	}

	lorenzPoints.forEach((point, index) => {
		const scale = 5;
		const offsetX = width / 2;
		const offsetY = height - 5;

		const xp = Math.floor(point.x * scale + offsetX);
		const yp = Math.floor(-point.z * scale * 0.3 + offsetY);

		if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
			const charIndex = Math.floor((index / lorenzPointCount) * lorenzChars.length);

			if (lorenzPointCount > 0 && lorenzPointCount % 3000 === 0) {
				// Reset aging by resetting the number of registered points
				lorenzPointCount = 0;
				currentGeneration += 1;
			}

			// Only update points in the current generation
			if (point.currentGeneration == currentGeneration) {
				const renderChar = lorenzChars[Math.min(charIndex, lorenzChars.length - 1)];
				framebuffer[yp][xp] = renderChar;
				point.char = renderChar;
			} else {
				// Render existing points from previous generations
				framebuffer[yp][xp] = point.char;
			}
		}
	});

	return framebuffer;
}

export function lorenz_cleanup() {
	lorenzPoints = [];
	lorenzPointCount = 0;
	decay = false;
	currentGeneration = 0;
	return;
}
