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
		const dpr = window.devicePixelRatio || 1;

		const characterWidth = fontSizeInPixels * 0.6; // 0.6 = monospace aspect ratio
		const characterHeight = fontSizeInPixels + 3;
		const canvasWidth = characterWidth * framebuffer[0].length;
		const canvasHeight = characterHeight * framebuffer.length;

		const fontFamily = getComputedStyle(document.documentElement).getPropertyValue("--font-meslo") || "monospace";

		const render = () => {
			const ctx = canvas.getContext("2d");
			if (ctx === null) {
				return;
			}

			// Reassigning width resets the bitmap and transform, so re-running
			// render() after the webfont loads redraws cleanly.
			canvas.width = canvasWidth * dpr;
			canvas.height = canvasHeight * dpr;
			canvas.style.width = `${canvasWidth}px`;
			canvas.style.height = `${canvasHeight}px`;

			ctx.scale(dpr, dpr);
			ctx.fillStyle = "#575757";
			ctx.font = `${fontSizeInPixels}px ${fontFamily}`;

			for (let i = 0; i < framebuffer.length; i++) {
				ctx.fillText(framebuffer[i].join(""), 0, i * characterHeight);
			}
		};

		render();

		// Re-render once the self-hosted webfont finishes loading, so the
		// first paint isn't stuck on the fallback monospace font.
		if (document.fonts.status === "loading") {
			let cancelled = false;
			document.fonts.ready.then(() => {
				if (!cancelled) {
					render();
				}
			});

			return () => {
				cancelled = true;
			};
		}
	}, [framebuffer, fontSize]);

	return <canvas ref={canvasRef} className="-z-20" />;
}
