'use client'

import React from 'react'
import { useLaunchParams } from '@telegram-apps/sdk-react'

interface WrapperProps {
	children: React.ReactNode
	className?: string
	useTop?: boolean
	useBottom?: boolean
}

const Wrapper = ({ children, className, useTop, useBottom }: WrapperProps) => {
	const launchParams = useLaunchParams()

	return (
		<div
			className={`${useTop && 'pt-[4.5rem]'} ${useBottom && 'pb-16'} ${
				useBottom && launchParams.platform === 'ios' && 'pb-[4.5rem]'
			} ${className}`}
		>
			{children}
		</div>
	)
}

export default Wrapper
