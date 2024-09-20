import { NavItem } from '@/types/nav'
import { Home, TextSearch, ShoppingCart, Star, UserRound } from 'lucide-react'

export const navItems: NavItem[] = [
	{ route: '/', Icon: Home },
	{ route: '/catalog', Icon: TextSearch },
	{ route: '/cart', Icon: ShoppingCart },
	{ route: '/favorite', Icon: Star },
	{ route: '/profile', Icon: UserRound },
]

interface Config {
	navItems: NavItem[]
}

export const config: Config = {
	navItems: navItems,
}
