'use client';
import Link from 'next/link';
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Navigation() {
	const pathname = usePathname();

	const t = useTranslations();
	const nav = t.raw('nav');

	const links = [
		{ href: '/', label: nav.home },
		{ href: '/projects', label: nav.projects },
		{ href: '/about', label: nav.about },
		{ href: '/learning', label: 'learning' },
	];

	return (
		<nav className='flex justify-between items-center '>
			<div className='flex gap-3'>
				{links.map((link, index) => (
					<Link
						key={index}
						className={`px-3 py-1 rounded-md font-semibold transition-colors duration-200
						${pathname === link.href ? 'text-primary' : 'hover:text-primary'}
					`}
						href={link.href}
					>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
