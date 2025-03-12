import React from 'react';

type Props = {};

// Define the tags
const tags = ['organic', 'healthy', 'natural', 'latest', 'Seeds'];

export const SortByTags = (props: Props) => {
	return (
		<div className="flex flex-col gap-3">
			<p className="border-b border-grey pb-1 text-xs font-semibold">
				Sort by Tags
			</p>
			<div className="flex gap-2 flex-wrap">
				{tags.map((tag) => (
					<div
						key={tag}
						className="bg-green rounded-full text-xs w-fit px-2 py-0.5 text-white hover:bg-white hover:text-green border border-green cursor-pointer"
					>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};
