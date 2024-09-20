import { FC } from 'react'

interface HeaderProps {
	title: string
	subtitle: string
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
	return (
		<div className='w-full px-4 py-2 shadow-sm bg-background'>
			<div className='flex flex-col'>
				<span className='text-xl font-bold'>{title}</span>
				<span className='text-base text-foreground-subtitle font-semibold'>
					{subtitle}
				</span>
			</div>
		</div>
	)
}

export default Header
