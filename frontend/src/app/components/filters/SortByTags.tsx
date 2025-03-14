import React from 'react';

type SortByTagsProps = {
	selectedTags: string[];
	onTagToggle: (tag: string) => void;
};

// Define the tags
const tags = ['Organic', 'Healthy', 'Natural', 'Latest', 'Fresh', 'Local'];

export const SortByTags = ({ selectedTags, onTagToggle }: SortByTagsProps) => {
	return (
		<div className="flex flex-col gap-3">
			<p className="border-b border-grey pb-1 text-xs font-semibold">
				Sort by Tags
			</p>
			<div className="flex gap-2 flex-wrap">
				{tags.map((tag) => (
					<div
						key={tag}
						className={`rounded-full text-xs w-fit px-2 py-0.5 cursor-pointer border border-green ${
							selectedTags.includes(tag)
								? 'bg-white text-green'
								: 'bg-green text-white hover:bg-white hover:text-green'
						}`}
						onClick={() => onTagToggle(tag)}
					>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};
