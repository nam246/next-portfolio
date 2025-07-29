"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function GSAPSlideLeft({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const childrenRef = useRef(null);

	useGSAP(
		() => {
			gsap.from(childrenRef.current, {
				opacity: 0,
				x: -30,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: childrenRef.current,
					start: "left 90%",
				},
			});
		},
		{ scope: childrenRef }
	);

	return (
		<div ref={childrenRef} className={className}>
			{children}
		</div>
	);
}
