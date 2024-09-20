import * as React from 'react'

import { cn } from '@/lib/utils'
import { FC } from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	Icon?: FC<React.SVGProps<SVGSVGElement>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, Icon, ...props }, ref) => {
		return (
			<div className={cn('relative flex items-center', className)}>
				{Icon ? (
					<Icon className='absolute left-3 h-5 w-5 text-foreground-subtitle' />
				) : null}
				<input
					type={type}
					className={cn(
						'flex h-10 w-full rounded-lg bg-background-secondary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-subtitle focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
						Icon ? 'pl-10' : 'pl-3',
						className,
					)}
					ref={ref}
					{...props}
				/>
			</div>
		)
	},
)
Input.displayName = 'Input'

export { Input }
