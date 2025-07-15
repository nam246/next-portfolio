"use client";

import dynamic from "next/dynamic";

const ThemeProvider = dynamic(
	() => import("next-themes").then((mod) => mod.ThemeProvider),
	{ ssr: false } // 💥 tắt SSR
);

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			{children}
		</ThemeProvider>
	);
}
