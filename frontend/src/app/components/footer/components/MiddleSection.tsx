import React from 'react';
import { NewsLetter } from './NewsLetter';

const footerSampleData = [
	{
		title: 'Pages',
		links: ['Home', 'Shop', 'Contact'],
	},
	{
		title: 'Products',
		links: ['Product 1', 'Product 2', 'Product 3'],
	},
	{
		title: 'Resources',
		links: ['FAQ', 'Quick Start', 'User Guide'],
	},
];

export const MiddleSection = () => {
	return (
		<div className="border-b border-white w-full flex py-5 ">
			<div className="flex flex-wrap w-full justify-between gap-y-5">
				{footerSampleData.map((section, index) => (
					<div
						key={index}
						className="flex flex-col gap-3"
					>
						<h4 className="font-bold text-sm md:text-base">{section.title}</h4>
						<ul>
							{section.links.map((link, index) => (
								<li
									key={index}
									className="text-xs md:text-sm"
								>
									<a
										href="#"
										className="hover:underline"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<NewsLetter />
			</div>
		</div>
	);
};
