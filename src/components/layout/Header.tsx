import Navigation from "@/components/layout/Navigation";
import { ModeToggle } from "../ui/ModeToggle";

export default function Header() {
	return (
		<header className="bg-white dark:bg-black rounded-lg shadow py-2 mb-5">
			<div className="flex aligns-center justify-between">
				<Navigation />
				<ModeToggle />
			</div>
		</header>
	);
}
