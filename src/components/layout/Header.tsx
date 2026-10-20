import Navigation from '@/components/layout/Navigation';
import { ModeToggle } from '../ui/ModeToggle';
import { LanguageToggle } from './LanguageToggle';

export default function Header() {
	return (
		<header className='bg-primary-foreground rounded-lg shadow py-2 mb-5'>
			<div className='flex aligns-center justify-between'>
				<Navigation />
				<div className='space-x-1 px-2'>
					<ModeToggle />
					<LanguageToggle />
				</div>
			</div>
		</header>
	);
}
