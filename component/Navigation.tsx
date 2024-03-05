import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="flex gap-5">
            <Link className="block font-bold" style={{color: '#000',}} href="/">Home</Link>
            <Link className="block font-bold" style={{color: '#000',}} href="/learning">Learning</Link>
            <Link className="block font-bold" style={{color: '#000',}} href="/about">About</Link>
        </nav>
    )
}