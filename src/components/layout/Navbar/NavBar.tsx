'use client'

import NavLink from '@/components/layout/Navbar/NavLink'
import { useNavItems } from '@/hooks/use-nav-items'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import { useFavorites } from '@/context/context-favorites'
import { useCart } from '@/context/context-cart'

const Navbar = () => {
	const launchParams = useLaunchParams()
	const dynamicNavItems = useNavItems()

	const { favorites } = useFavorites()
	const { cart } = useCart()

	const updatedNavItems = dynamicNavItems.map(item => {
		if (item.route === '/favorite') {
			return { ...item, badgeCount: favorites.length }
		} else if (item.route === '/cart') {
			return { ...item, badgeCount: cart.length }
		}

		return item
	})

	return (
		<nav
			className={`fixed bottom-0 py-5 z-50 w-full flex items-center justify-around bg-background-secondary ${
				launchParams.platform === 'ios' && 'pb-8'
			}`}
		>
			{updatedNavItems.map((item, index) => (
				<NavLink key={index} {...item} />
			))}
		</nav>
	)
}

export default Navbar
