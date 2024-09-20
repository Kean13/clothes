'use client'

import React, { useState, FC } from 'react'

import { categories } from '@/data/category'
import CategoryList from '@/components/layout/Category/CategoryList'
import ProductGrid from '@/components/layout/Product/ProductGrid'
import CategoryLink from '@/components/layout/Category/CategoryLink'

import { useFilteredProducts } from '@/hooks/use-filtered-products'

interface CatsProps {
	view: 'scroll' | 'list'
	searchQuery: string
}

const Category: FC<CatsProps> = ({ view, searchQuery }) => {
	const [activeCategory, setActiveCategory] = useState<number | null>(
		categories[0].id,
	)

	const handleCategoryClick = (categoryId: number) => {
		setActiveCategory(categoryId)
	}

	const { filteredProducts, filteredCategories } = useFilteredProducts(
		activeCategory,
		searchQuery,
	)

	if (view === 'scroll') {
		return (
			<div>
				<CategoryList
					activeCategory={activeCategory}
					onCategoryClick={handleCategoryClick}
				/>
				{filteredProducts.length === 0 ? (
					<div className='w-full h-52 flex items-center justify-center text-xl text-foreground-subtitle'>
						Ничего не найдено
					</div>
				) : (
					<ProductGrid
						products={filteredProducts}
						showFavoriteButton
					/>
				)}
			</div>
		)
	} else if (view === 'list') {
		return (
			<div className='px-4'>
				<ul>
					{filteredCategories.map(category => (
						<CategoryLink
							key={category.id}
							id={category.id}
							name={category.name}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default Category
