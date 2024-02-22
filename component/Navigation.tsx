import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="flex gap-5 divide-x" style={{gap: "5px"}}>
            <Link className="block text-slate-300" href="/">Home</Link>
            <Link className="block text-slate-300" href="/portfolio">Learning</Link>
            <Link className="block text-slate-300" href="/about">About</Link>
        </nav>
    )
}