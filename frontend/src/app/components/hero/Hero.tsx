import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import fruitsImg from './assets/fruits-img.png';
import bgImg from './assets/background.png';
export const Hero = () => {
	return (
		<div
			className="flex flex-col md:flex-row gap-10 md:gap-32 justify-center items-center py-10"
			style={{
				backgroundImage: `url(${bgImg.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'left center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="flex flex-col gap-8 justify-center items-center md:items-start">
				<p className="font-medium text-green text-sm md:text-base">
					100% Organic Products
				</p>
				<h1 className="flex flex-col text-xl md:text-3xl lg:text-4xl text-center md:text-left">
					Fresh, Healthy & Local <span>Homegrown Produce</span>
				</h1>
				<Button label="Shop Now" />
			</div>
			<Image
				src={fruitsImg}
				height={450}
				width={450}
				alt="fruits image"
				className="flex drop-shadow-lg image-effect"
			/>
		</div>
	);
};
