"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const pathname = usePathname();

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/projects", label: "Projects" },
		{ href: "about", label: "About" },
	];

	return (
		<nav className="flex gap-3 bg-white rounded-lg shadow px-4 py-2">
			{links.map((link, index) => (
				<Link
					key={index}
					className={`px-3 py-1 rounded-md font-semibold transition-colors duration-200
						${
							pathname === link.href
								? "text-sky-600 border-b-2 border-sky-500 bg-sky-50"
								: "text-gray-700 hover:text-sky-500 hover:bg-sky-100"
						}
					`}
					href={link.href}
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
