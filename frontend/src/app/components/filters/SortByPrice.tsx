import React from 'react';
import { Progress } from '@/components/ui/progress';

export const SortByPrice = () => {
	return (
		<div className="flex flex-col gap-3">
			<p className="border-b border-grey pb-1 text-xs font-semibold">
				Sort by Price Range
			</p>
			<div className="flex flex-col gap-1">
				<Progress value={33} />
				<div className="flex justify-between text-xs">
					<span>0</span>
					<span>$200</span>
				</div>
			</div>
		</div>
	);
};
