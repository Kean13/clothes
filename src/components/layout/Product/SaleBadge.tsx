import React from 'react'
import { FC } from 'react'

interface SaleBadgeProps {
	sale: number
}

const SaleBadge: FC<SaleBadgeProps> = ({ sale }) => {
	return (
		<span className='absolute bottom-2 left-2 py-[0.1rem] px-2 bg-button text-background font-semibold rounded-md'>
			-{sale}%
		</span>
	)
}

export default SaleBadge
