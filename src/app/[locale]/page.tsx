import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { HeroCarousel } from '@/components/layout/HeroCarousel';
import { Download, GitBranch, Mail, Smartphone } from 'lucide-react';
import { GSAPSlideLeft } from '@/components/animations/gsap-slide-left';
import { GSAPSlideUp } from '@/components/animations/gsap-slide-up';
import { GSAPSlideRight } from '@/components/animations/gsap-slide-right';

const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
	<div className='bg-slate-100 dark:bg-slate-900 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all'>
		<span className='text-sky-500 text-2xl'>{icon}</span>
		<h2 className='text-sky-700 text-xl ps-2'>{title}</h2>
	</div>
);

export default function Homepage() {
	const t = useTranslations();
	const meta = t.raw('meta');
	const sections = t.raw('sections');
	const skills = t.raw('skills') as Array<{
		title: string;
		description: string[];
	}>;
	const experiences = t.raw('experiences') as Array<{
		position: string;
		companyName: string;
		startDate: string;
		endDate: string;
		accomplishments: string[];
	}>;
	const education = t.raw('education') as Array<{
		university: string;
		major: string;
		degrees: string;
		startDate: string;
		endDate: string;
	}>;
	const languages = t.raw('languages') as Array<{
		name: string;
		proficiency: string;
	}>;
	const ui = t.raw('ui');

	return (
		<>
			<div className='section mb-3 '>
				<div className='flex flex-col lg:flex-row justify-between align-start gap-5'>
					<GSAPSlideLeft className='flex flex-col gap-3 flex-1'>
						<figure className='relative w-37.5 h-37.5'>
							<Image
								src='/avataaars.png'
								alt={meta.name}
								className='rounded-md object-cover'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</figure>
						<h1 className='uppercase font-bold text-2xl'>{meta.name}</h1>
						<ul className='list-none ps-0'>
							<li className='mb-3'>
								<Link
									className='hover:text-sky-500'
									target='_blank'
									href={'mailto:' + meta.email}
								>
									<Mail className='inline mr-1 align-top' /> Email: {meta.email}
								</Link>
							</li>
							<li className='mb-3'>
								<Link
									className='hover:text-sky-500'
									target='_blank'
									href={'tel:' + meta.phoneNumber}
								>
									<Smartphone className='inline mr-1 align-top' /> Phone number:{' '}
									{meta.phoneNumber}
								</Link>
							</li>
							<li className='mb-3'>
								<Link className='hover:text-sky-500' target='_blank' href={meta.github}>
									<GitBranch className='inline mr-1 align-top' />
									Github
								</Link>
							</li>
							<li className='mb-3'>
								<Link
									className='hover:text-sky-500'
									target='_blank'
									href='/VuHoangDieuTrung-Software Developer.pdf'
									download={true}
								>
									<Download className='inline mr-1 align-top' /> {ui.downloadCV}
								</Link>
							</li>
						</ul>

						<p className='rounded-md'>{t('bio')}</p>
					</GSAPSlideLeft>

					<GSAPSlideRight className='flex-1'>
						<HeroCarousel />
					</GSAPSlideRight>
				</div>
			</div>

			<div className='section mb-3'>
				<GSAPSlideLeft>
					<SectionHeader icon={`🛠️`} title={sections.skills} />
				</GSAPSlideLeft>
				<GSAPSlideUp>
					<ul className='mt-3 space-y-2'>
						{skills.map((skill, index) => (
							<li key={index}>
								<div className='font-bold'>{skill.title}</div>
								<ul className='list-disc list-inside ms-4'>
									{skill.description.map((d, i) => (
										<li key={i}>{d}</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</GSAPSlideUp>
			</div>

			<div className='section mb-3'>
				<GSAPSlideLeft>
					<SectionHeader icon={`💼`} title={sections.experience} />
				</GSAPSlideLeft>
				<GSAPSlideUp className='mt-3 space-y-5'>
					{experiences.map((exp, index) => (
						<div key={index} className='mb-5'>
							<h3 className='font-semibold text-lg'>
								{exp.position} | {exp.companyName}
							</h3>
							<div className='mb-3'>
								{exp.startDate} - {exp.endDate}
							</div>
							<ul className='list-disc list-inside ms-4'>
								{exp.accomplishments.map((acc, i) => (
									<li key={i}>{acc}</li>
								))}
							</ul>
						</div>
					))}
				</GSAPSlideUp>
			</div>

			<div className='section mb-3'>
				<GSAPSlideLeft>
					<SectionHeader icon={`🎓`} title={sections.education} />
				</GSAPSlideLeft>
				<GSAPSlideUp className='mt-3 space-y-3'>
					{education.map((e, index) => (
						<div key={index}>
							<h3 className='font-semibold text-base'>{e.university}</h3>
							<ul className='list-disc list-inside ms-4'>
								<li>{e.degrees}</li>
								<li>
									{ui.major || 'Chuyên ngành'}: {e.major}
								</li>
							</ul>
						</div>
					))}
				</GSAPSlideUp>
			</div>

			<div className='section mb-3'>
				<GSAPSlideLeft>
					<SectionHeader icon={`🌐`} title={sections.languages} />
				</GSAPSlideLeft>
				<GSAPSlideUp>
					<ul className='list-disc list-inside ms-4 mt-3'>
						{languages.map((language, index) => (
							<li key={index}>{language.name}</li>
						))}
					</ul>
				</GSAPSlideUp>
			</div>
		</>
	);
}
