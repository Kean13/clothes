import { useState, useCallback, useEffect } from 'react'
import { navItems } from '@/config/config'
import { NavItem } from '@/types/nav'

export const useNavItems = () => {
	const [dynamicNavItems, setDynamicNavItems] = useState<NavItem[]>(navItems)

	const updateBadgeCounts = useCallback(() => {
		const favorites: string[] = JSON.parse(
			localStorage.getItem('favorites') || '[]',
		)
		const cartItems: string[] = JSON.parse(
			localStorage.getItem('cartItems') || '[]',
		)

		const updatedNavItems = navItems.map((item: NavItem) => {
			if (item.route === '/favorites') {
				return { ...item, badgeCount: favorites.length }
			}
			if (item.route === '/cart') {
				return { ...item, badgeCount: cartItems.length }
			}
			return item
		})

		setDynamicNavItems(updatedNavItems)
	}, [])

	useEffect(() => {
		updateBadgeCounts()

		const handleStorageChange = () => updateBadgeCounts()
		window.addEventListener('storage', handleStorageChange)

		const originalSetItem = localStorage.setItem
		localStorage.setItem = function (key: string, value: string) {
			originalSetItem.call(this, key, value)
			if (key === 'favorites' || key === 'cartItems') {
				handleStorageChange()
			}
		}

		return () => {
			window.removeEventListener('storage', handleStorageChange)
			localStorage.setItem = originalSetItem
		}
	}, [updateBadgeCounts])

	return dynamicNavItems
}
