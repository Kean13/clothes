'use client'

import Wrapper from '@/components/layout/Wrapper'
import Image from 'next/image'
import Link from 'next/link'

const NotFoundView = () => {
	return (
		<Wrapper
			useBottom
			className='bg-background-secondary w-full h-screen flex items-center justify-center gap-2'
		>
			<Image src='/404.gif' alt='sticker' width={75} height={75} />
			<div className='flex flex-col'>
				<span className='text-lg font-semibold -mb-1'>
					Как вы сюда попали?
				</span>
				<Link
					href='/'
					className='underline text-base text-foreground-subtitle font-semibold'
				>
					Вернуться на главную
				</Link>
			</div>
		</Wrapper>
	)
}

export default NotFoundView
