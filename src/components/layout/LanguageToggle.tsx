'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';

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

	const changeLanguage = (nextLocale: 'en' | 'vi') => {
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
				<DropdownMenuItem
					onClick={() => changeLanguage('vi')}
					className={locale === 'vi' ? 'bg-accent' : ''}
				>
					Tiếng Việt
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => changeLanguage('en')}
					className={locale === 'en' ? 'bg-accent' : ''}
				>
					English
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
