import { useEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";

/**
 * Hook for breakpoint conditional rendering
 * @param query eg "(width <= 600px)"
 * @returns
 */
export function useMediaQuery(query: string) {
	const [matchesQuery, setMatchesQuery] = useState<boolean>(() => {
		if (IS_SERVER) return false;
		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matchesQuery) {
			setMatchesQuery(media.matches);
		}

		const handleChange = () => {
			setMatchesQuery(media.matches);
		};

		media.addEventListener("change", handleChange);
		return () => {
			media.removeEventListener("change", handleChange);
		};
	}, [query]);

	return matchesQuery;
}

export const breakpointSmall = () => useMediaQuery("(width >= 40rem)");
export const breakpointMedium = () => useMediaQuery("(width >= 48rem)");
export const breakpointLarge = () => useMediaQuery("(width >= 64rem)");
export const breakpointLargeX = () => useMediaQuery("(width >= 80rem)");
export const breakpointLargeXX = () => useMediaQuery("(width >= 96rem)");
