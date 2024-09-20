'use client'

import { FC, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/types/nav'

interface BadgeProps {
	count: number
}

const Badge: FC<BadgeProps> = ({ count }) => {
	if (count === 0) return null
	return (
		<span className='absolute top-0 left-2/4 -mt-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-background bg-button rounded-full'>
			{count}
		</span>
	)
}

const NavLink: FC<NavItem> = ({ route, Icon, badgeCount = 0 }) => {
	const pathName = usePathname()
	const isActive = useMemo(() => pathName === route, [pathName, route])

	return (
		<div className='relative w-full h-full'>
			<Link
				href={route}
				className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
					isActive ? 'text-button' : 'text-foreground-subtitle'
				}`}
			>
				<Icon />
				<Badge count={badgeCount} />
			</Link>
		</div>
	)
}

export default NavLink
