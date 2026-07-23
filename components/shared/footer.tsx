"use client";
import { useEffect, useState } from "react";

export default function Footer() {
	const [updatedDate, setUpdatedDate] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const effect = async () => {
			const res = await fetch(
				process.env.NODE_ENV === "production"
					? "https://www.johnling.me/api/updated"
					: "http://localhost:3000/api/updated",
			);
			if (res.ok) {
				const { updated } = await res.json();
				setUpdatedDate(updated);
			} else {
				setUpdatedDate("ERROR");
			}
			setLoading(false);
		};
		effect();
	}, []);

	// Formatting is important don't touch
	const asciiBanner = String.raw`       __      __             __    _            
      / /___  / /_  ____     / /   (_)___  _____
 __  / / __ \/ __ \/ __ \   / /   / / __ \/ __  /
/ /_/ / /_/ / / / / / / /  / /___/ / / / / /_/ / 
\____/\____/_/ /_/_/ /_/  /_____/_/_/ /_/\__, /  
                                        /____/`;
	return (
		<footer className="flex flex-row p-3 mt-2 mb-4 justify-between items-center border-2 border-grey-light rounded-lg bg-grey-dark w-11/12 md:w-1/2  mx-auto font-mono text-xs ">
			<div className="flex w-full items-center justify-between">
				<div className="flex flex-col items-center w-full">
					<p className="text-[0.67rem] leading-snug whitespace-pre select-none font-mono">{asciiBanner}</p>
					<span className="font-bold mt-3 lg:ml-3">
						Last Updated On <span>{loading ? "Loading..." : updatedDate}</span>
					</span>
				</div>
			</div>
		</footer>
	);
}
