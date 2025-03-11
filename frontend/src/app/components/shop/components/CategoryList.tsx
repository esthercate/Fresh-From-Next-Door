import React from 'react';

type CategoryListProps = {
	categories: string[];
	selectedCategory: string;
	onSelectCategory: (category: string) => void;
};

export const CategoryList: React.FC<CategoryListProps> = ({
	categories,
	selectedCategory,
	onSelectCategory,
}) => {
	return (
		<div className="flex justify-center items-center space-x-2 flex-wrap">
			{categories.map((category, index) => (
				<React.Fragment key={category}>
					<span
						className={`text-center cursor-pointer text-sm ${
							selectedCategory === category
								? 'font-bold text-green'
								: 'font-bold'
						}`}
						onClick={() => onSelectCategory(category)}
					>
						{category}
					</span>
					{index < categories.length - 1 && (
						<span className="text-center">|</span>
					)}
				</React.Fragment>
			))}
		</div>
	);
};
