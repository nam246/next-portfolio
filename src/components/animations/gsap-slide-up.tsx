"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPSlideUp({
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
				y: 30,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: childrenRef.current,
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
