import { FC } from 'react'
import { categories } from '@/data/category'
import { Separator } from '@/components/default/Separator'

interface CategoryListProps {
	activeCategory: number | null
	onCategoryClick: (categoryId: number) => void
}

const CategoryList: FC<CategoryListProps> = ({
	activeCategory,
	onCategoryClick,
}) => {
	return (
		<div className='overflow-x-auto'>
			<ul className='p-4 flex gap-4 whitespace-nowrap'>
				{categories.map(category => (
					<li
						key={category.id}
						onClick={() => onCategoryClick(category.id)}
						className={`text-2xl font-medium cursor-pointer transition-colors lowercase last:pr-4 ${
							activeCategory === category.id
								? 'text-foreground'
								: 'text-foreground-subtitle'
						}`}
					>
						{category.name}
						{activeCategory === category.id && (
							<Separator className='mt-2 h-[0.1rem] bg-foreground' />
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryList
