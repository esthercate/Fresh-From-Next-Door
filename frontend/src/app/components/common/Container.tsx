import * as React from 'react';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type ContainerProps = React.ComponentProps<'div'> & {
	children: React.ReactNode;
};

export const Container = ({
	children,
	className,
	...props
}: ContainerProps) => {
	return (
		<div
			className={cn('mx-auto max-w-7xl p-3 md:p-6 lg:p-8', className)}
			{...props}
		>
			{children}
		</div>
	);
};
