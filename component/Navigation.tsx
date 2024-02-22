import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="flex gap-5 divide-x" style={{gap: "5px"}}>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Resume</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}