interface Props {
	updatedOn: string;
}

export default function Footer({ updatedOn }: Props) {
	// Formatting is important don't touch
	const asciiBanner = String.raw`       __      __             __    _            
      / /___  / /_  ____     / /   (_)___  _____
 __  / / __ \/ __ \/ __ \   / /   / / __ \/ __  /
/ /_/ / /_/ / / / / / / /  / /___/ / / / / /_/ / 
\____/\____/_/ /_/_/ /_/  /_____/_/_/ /_/\__, /  
                                        /____/`;
	return (
		<footer className="flex flex-row p-3 mt-2 mb-4 justify-between items-center border-2 border-grey-light rounded-lg bg-grey-dark w-11/12 md:w-1/2  mx-auto font-mono text-xs ">
			<div className="flex w-full items-center justify-between" aria-hidden>
				<div className="flex flex-col items-center w-full">
					<p aria-hidden className="text-[0.67rem] leading-snug whitespace-pre select-none font-mono">
						{asciiBanner}
					</p>
					<span className="font-bold mt-3 lg:ml-3">
						Last Updated On <span>{updatedOn}</span>
					</span>
				</div>
			</div>
		</footer>
	);
}
