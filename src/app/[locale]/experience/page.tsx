import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PageHeading } from '@/components/layout/PageHeading';
import { ArrowRight, SquareChevronRight } from 'lucide-react';

import { TypeExperience } from '@/lib/type';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ExperienceItem({
	experience,
	index,
}: {
	experience: TypeExperience;
	index: number;
}) {
	const isEven = index % 2 === 0;

	return (
		<div
			className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between w-full`}
		>
			{/* Left Column (Desktop Date) */}
			<div
				className={`hidden md:flex w-5/12 ${isEven ? 'justify-end' : 'justify-start'} pr-12`}
			>
				<Badge>
					{experience.startDate} - {experience.endDate}
				</Badge>
				<div className={isEven ? 'text-right' : 'text-right order-2'}></div>
			</div>

			{/* Center Dot */}
			<div className='absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ring-4 ring-primary/10' />

			{/* Card Content */}
			<Card className='w-full md:w-5/12'>
				<CardHeader>
					<CardTitle>
						<div>
							<span
								className='material-symbols-outlined text-primary'
								style={{ fontVariationSettings: '"FILL" 1' }}
							>
								<SquareChevronRight />
							</span>
						</div>
						<div>
							<h3 className='font-headline-lg text-headline-lg leading-tight'>
								{experience.position}
							</h3>
							<p className='font-code-sm text-code-sm text-tertiary'>
								{experience.companyName}
							</p>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{/* Mobile Date */}
					<div className='md:hidden mb-4'>
						<span className='font-code-sm text-code-sm bg-surface-variant px-3 py-1 rounded-full text-primary border border-primary/20'>
							{experience.startDate} - {experience.endDate}
						</span>
					</div>

					<ul className='space-y-3 font-body-md text-body-md text-on-surface-variant'>
						{experience.accomplishments.map((accomplishment, i) => (
							<li key={i} className='flex gap-3'>
								<span className='text-primary mt-1 shrink-0'>▹</span>
								<span>{accomplishment}</span>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</div>
	);
}

export default function Experience() {
	const t = useTranslations();
	const experiences = t.raw('experiences') as Array<TypeExperience>;

	return (
		<>
			<PageHeading title={'Kinh nghiệm làm việc'} />

			<div className='relative'>
				{/* Timeline Line */}
				<div className='absolute left-0 md:left-1/2 -translate-x-1/2 md:translate-x-0 md:-ml-px h-full w-0.5 timeline-line opacity-20 bg-black'></div>

				<div className='space-y-12 relative'>
					{experiences.map((experience, index) => (
						<ExperienceItem key={index} experience={experience} index={index} />
					))}
				</div>
			</div>

			<section className='mt-24 grid grid-cols-1 md:grid-cols-12 gap-gutter'>
				<div className='md:col-span-8 bento-card p-8 rounded-xl flex flex-col justify-between overflow-hidden relative group'>
					{/* Decorative glow */}
					<div className='absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500' />

					<div className='relative z-10'>
						<h2 className='font-headline-lg text-headline-lg mb-4'>
							{'Bạn đang tìm kiếm cộng tác?'}
						</h2>
						<p className='font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl'>
							{
								'Tôi luôn sẵn sàng thảo luận về các dự án công nghệ mới hoặc cơ hội nghề nghiệp đầy thử thách.'
							}
						</p>
						<Link
							href='/contact'
							className='inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-transform hover:gap-4'
						>
							{'Liên hệ ngay'}
							<ArrowRight className='w-4 h-4' />
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
