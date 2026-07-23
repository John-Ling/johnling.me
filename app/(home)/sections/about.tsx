"use client";
import Image from "next/image";
import myself_vertical from "@/public/images/homepage/myself.jpg";
import nixie from "@/public/images/homepage/nixie.png";
import peking from "@/public/images/homepage/peking.jpg";
import study from "@/public/images/homepage/study.jpg";
import { stagger, motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: stagger(0.1),
		},
	},
};

const item = {
	hidden: { opacity: 0, transform: "translateY(8px)" },
	show: { opacity: 1, transform: "translateY(0px)" },
};

export function About() {
	return (
		<>
			<motion.div variants={container} initial="hidden" animate="show" className="w-full lg:w-1/2 lg:mx-auto mt-10">
				<motion.h2 variants={item} className="text-4xl mb-3 font-serif mt-3 font-bold text-white">
					A Bit More <span className="text-orange">About Me</span>
				</motion.h2>
				<motion.p variants={item} className="mb-4">
					Currently, I&apos;m a final year Computer Science student at the University of Melbourne. I built this website
					back in 2022 as part of an online course.
				</motion.p>
				<motion.p variants={item} className="mb-4">
					Since then, however, I&apos;ve kept it around as my own personal place on the internet.
				</motion.p>
				<motion.p variants={item}>
					Beyond programming, I enjoy the piano, hobby electronics, homelabbing, cooking and Linux ricing.
				</motion.p>
				<motion.p variants={item} className="md:hidden block mt-4 text-left">
					Currently, I&apos;m trying to build a browser extension with Svelte!
				</motion.p>
			</motion.div>

			{/* Photos */}
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="lg:row-span-2 max-w-md lg:max-w-none lg:w-1/2 mx-auto mt-10 mb-10"
			>
				{/* Desktop Layout */}
				<div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-3">
					<motion.div variants={item} className="relative overflow-hidden col-span-2">
						<Image src={myself_vertical} className="h-auto z-30" priority alt="Picture of the creator of the website" />
					</motion.div>
					<motion.div variants={item} className="relative overflow-hidden">
						<Image src={nixie} alt="Dog" className="w-60 h-auto" fill priority />
					</motion.div>
					<motion.div variants={item} className="relative overflow-hidden">
						<Image src={peking} alt="peking duck" className="h-auto w-60" fill priority />
					</motion.div>
					<motion.div variants={item} className="relative overflow-hidden col-span-2">
						<Image src={study} alt="studying" className="h-auto" width={3042} height={4032} priority />
					</motion.div>
				</div>

				{/* Medium / tablet layout */}
				<div className="hidden lg:hidden md:grid md:grid-cols-1 gap-3">
					<motion.div variants={item} className="relative">
						<Image
							src={myself_vertical}
							priority
							className="block lg:hidden"
							alt="Picture of the creator of the website"
						/>
					</motion.div>
					<motion.div variants={item} className="flex lg:hidden gap-3">
						<div className="relative flex-1">
							<Image src={peking} alt="peking duck" className="h-auto w-52" fill />
						</div>
						<div className="relative flex-1">
							<Image src={nixie} alt="nixie tubes" className="h-auto" />
						</div>
					</motion.div>
				</div>

				{/* Mobile layout */}
				<motion.div variants={item} className="flex flex-col mx-auto max-w-sm md:hidden">
					<Image src={myself_vertical} className="block lg:hidden" alt="Picture of the creator of the website" />
				</motion.div>
			</motion.div>
		</>
	);
}
