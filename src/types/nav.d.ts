import { FC } from 'react'

export interface NavItem {
	route: string
	Icon: FC<React.SVGProps<SVGSVGElement>>
	badgeCount?: number
}
