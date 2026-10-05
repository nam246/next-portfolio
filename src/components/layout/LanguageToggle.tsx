'use client';

import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { locales } from '@/lib/i18n';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/routing';

export function LanguageToggle() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const changeLanguage = (nextLocale: 'en' | 'vi' | 'ja') => {
		router.replace(pathname, { locale: nextLocale });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' size='icon'>
					<Languages className='h-[1.2rem] w-[1.2rem]' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{locales.map((loc, i) => (
					<DropdownMenuItem
						key={i}
						onClick={() => changeLanguage(loc)}
						className={locale === loc ? 'bg-accent' : ''}
					>
						{loc === 'en' ? 'English' : loc === 'vi' ? 'Tiếng Việt' : '日本語'}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
