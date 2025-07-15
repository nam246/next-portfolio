// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const LightButton = (
		<button onClick={() => setTheme("light")}>
			<Sun />
		</button>
	);

	const DarkButton = (
		<button onClick={() => setTheme("dark")}>
			<Moon />
		</button>
	);

	return (
		<div>
			{theme == "light" ? DarkButton : LightButton}
		</div>
	);
}
