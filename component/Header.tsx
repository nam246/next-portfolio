import Image from "next/image";
import Navigation from '@/component/Navigation';
export default function Header() {
    return (
        <header>
            <div className="flex aligns-center justify-between">
                <div className="logo text-left">
                </div>
                <div className="w-full">
                </div>
            </div>
            <Navigation />
        </header>
    )
}