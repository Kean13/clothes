import { FC } from 'react'
import Link from 'next/link'

import { Separator } from '@/components/default/Separator'

interface CategoryLinkProps {
	id: number
	name: string
}

const CategoryLink: FC<CategoryLinkProps> = ({ id, name }) => {
	return (
		<li className='mb-4 text-2xl font-medium first-letter:uppercase'>
			<Link href={`/category/${id}`} className='cursor-pointer'>
				{name}
			</Link>
			<Separator className='mt-2' />
		</li>
	)
}

export default CategoryLink
