'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/experience', label: 'Experience' },
	];

	return (
		<nav aria-label='Main' className='flex-1 min-w-0'>
			<ul className='flex flex-wrap items-center gap-1 m-0 p-0 list-none'>
				{links.map((link) => {
					const isCurrent = link.href === pathname;
					return (
						<li key={link.href}>
							<a
								href={link.href}
								aria-current={isCurrent ? 'page' : undefined}
								className={`
									${isCurrent ? 'bg-emerald-50' : ''}
                      relative inline-block rounded-md px-3 py-2 text-sm font-medium
                      text-stone-600 no-underline transition-colors
                      hover:bg-emerald-50 hover:text-stone-900
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700
                      aria-[current=page]:bg-emerald-50
                      aria-[current=page]:font-bold
                      aria-[current=page]:text-emerald-900
                      aria-[current=page]:after:content-['']
                      aria-[current=page]:after:absolute
                      aria-[current=page]:after:left-3
                      aria-[current=page]:after:right-3
                      aria-[current=page]:after:-bottom-px
                      aria-[current=page]:after:h-0.5
                      aria-[current=page]:after:rounded-full
                      aria-[current=page]:after:bg-emerald-700
                    `}
							>
								{link.label}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
