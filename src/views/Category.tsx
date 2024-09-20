'use client'

import { FC } from 'react'
import { notFound } from 'next/navigation'

import { categories } from '@/data/category'
import { products } from '@/data/product'

import Wrapper from '@/components/layout/Wrapper'
import ProductGrid from '@/components/layout/Product/ProductGrid'

interface CategoryProps {
	id: number
}

const CategoryView: FC<CategoryProps> = ({ id }) => {
	const category = categories.find(p => p.id === id)
	if (!category) return notFound()

	const filteredProducts = products.filter(p => p.categoryId === id)

	return (
		<Wrapper useBottom>
			{filteredProducts.length === 0 ? (
				<div className='w-full h-screen pb-16 flex items-center justify-center text-xl text-foreground-subtitle'>
					Ничего не найдено
				</div>
			) : (
				<ProductGrid products={filteredProducts} showFavoriteButton />
			)}
		</Wrapper>
	)
}

export default CategoryView
