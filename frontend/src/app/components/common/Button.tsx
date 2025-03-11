import React from 'react';

type ButtonProps = {
	label: string;
};

const Button = ({ label }: ButtonProps) => {
	return (
		<button className="text-white bg-green px-6 py-2.5 rounded-lg font-bold text-base">
			{label}
		</button>
	);
};

export default Button;
