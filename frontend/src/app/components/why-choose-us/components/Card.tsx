import React from 'react';

type CardProps = {
	cardNumber: string;
	title: string;
	description: string;
};

const Card = ({ cardNumber, title, description }: CardProps) => {
	return (
		<div className="flex gap-5 w-full md:w-1/2 items-start">
			<h3 className="text-green font-bold text-2xl">{cardNumber}</h3>
			<div className="flex flex-col gap-3">
				<h4 className="font-bold">{title}</h4>
				<p className="text-xs text-balance">{description}</p>
			</div>
		</div>
	);
};

export default Card;
