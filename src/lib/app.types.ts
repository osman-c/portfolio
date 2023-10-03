export type Project = {
	ref: string;
	title: string;
};

export type Experience = {
	ref?: string;
	start: Date;
	end?: Date;
	title: string;
	secondary?: string[];
	company?: string;
	tags: string[];
	projects?: Project[];
	content: string;
};
