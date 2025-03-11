import React from 'react';

type SectionTitleProps = {
	title: string;
};

export const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-lg md:text-3xl text-center relative">{title}</h2>
			<div className="w-15 h-1 bg-green mt-1"></div>
		</div>
	);
};
