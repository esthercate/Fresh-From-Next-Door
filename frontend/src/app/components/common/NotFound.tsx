import Image from 'next/image';
import React from 'react';
import notFound from './assets/notfound.png';

type NotFoundProps = {
	title: string;
	description: string;
};

export const NotFound = ({ title, description }: NotFoundProps) => {
	return (
		<div className="flex flex-col gap-4 w-full justify-center items-center text-center">
			<Image
				src={notFound}
				width={200}
				height={200}
				alt="Not found"
			/>
			<h3 className="font-bold">{title}</h3>
			<p className="text-sm">{description}</p>
		</div>
	);
};
