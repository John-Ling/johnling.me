"use client";
import { useEffect, useRef } from "react";

interface AsciiDisplayProps {
	framebuffer?: string[][];
	fontSize?: number; // measured in rem
}

export default function AsciiDisplay({ framebuffer, fontSize }: AsciiDisplayProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (framebuffer === undefined || fontSize === undefined) {
			return;
		}

		const canvas = canvasRef.current;
		if (canvas === null) {
			return;
		}

		const fontSizeInPixels = fontSize * 16; // 16 = 1rem

		const characterWidth = fontSizeInPixels * 0.6; // 0.6 = monospace aspect ratio
		const characterHeight = fontSizeInPixels + 3;
		const canvasWidth = characterWidth * framebuffer[0].length;
		const canvasHeight = characterHeight * framebuffer.length;

		canvas.width = canvasWidth;
		canvas.height = canvasHeight;

		const ctx = canvas.getContext("2d");
		if (ctx === null) {
			return;
		}

		ctx.fillStyle = "#575757";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = `${fontSizeInPixels}px monospace`;

		for (let i = 0; i < framebuffer.length; i++) {
			const row = framebuffer[i];
			for (let j = 0; j < row.length; j++) {
				const c = row[j];
				ctx.fillText(c, j * characterWidth, i * characterHeight);
			}
		}
	}, [framebuffer, fontSize]);

	return <canvas ref={canvasRef} className="-z-20" />;
}
