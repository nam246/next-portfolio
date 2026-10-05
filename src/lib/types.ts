export type Locales = 'en' | 'vi' | 'ja';

export type Meta = {
	name: string;
	email: string;
	phoneNumber: string;
	github: string;
	bio: string;
};

export type Skill = {
	title: string;
	description: string[];
};

export type Experience = {
	position: string;
	companyName: string;
	startDate: string;
	endDate: string;
	accomplishments: string[];
};

export type Education = {
	university: string;
	major: string;
	degrees: string;
	startDate: string;
	endDate: string;
};

export type Certification = {
	name: string;
	proficiency: string;
};
