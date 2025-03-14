import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';

type SortByPriceProps = {
	onPriceChange: (range: [number, number]) => void;
};

export const SortByPrice = ({ onPriceChange }: SortByPriceProps) => {
	const [selectedRange, setSelectedRange] = useState<[number, number]>([
		0, 100,
	]);

	const handleSliderChange = (value: number[]) => {
		if (Array.isArray(value) && value.length === 2) {
			setSelectedRange([value[0], value[1]]);
			onPriceChange([value[0], value[1]]);
		}
	};

	return (
		<div className="flex flex-col gap-3">
			<p className="border-b border-grey pb-1 text-xs font-semibold">
				Sort by Price Range
			</p>
			<div className="flex flex-col gap-1">
				<Slider
					defaultValue={[0, 100]}
					max={100}
					step={10}
					onValueChange={handleSliderChange}
				/>
				<div className="flex justify-between text-xs">
					<span>${selectedRange[0]}</span>
					<span>${selectedRange[1]}</span>
				</div>
			</div>
		</div>
	);
};
