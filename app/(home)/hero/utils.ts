import { CanvasSize } from "@/types/hero/CanvasSize";

export function check_special() {
	if (typeof window !== "undefined") {
		const searchParams = new URLSearchParams(window.location.search);
		return searchParams.has("apple");
	}

	return false;
}

export function init_size(): CanvasSize {
	if (typeof window === "undefined") {
		return { width: 65, height: 20, fontSize: 1 } as CanvasSize;
	}

	const fontSize = 0.825;
	const fontSizeInPixels = fontSize * 16; // 16 = 1rem
	const characterWidth = fontSizeInPixels * 0.6; // 0.6 = monospace aspect ratio
	const characterHeight = fontSizeInPixels + 3;

	return {
		width: Math.floor(window.innerWidth / characterWidth),
		height: Math.floor(window.innerHeight / characterHeight) + 17,
		fontSize: fontSize,
	};
}
