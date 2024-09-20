import { useMemo } from 'react'
import { products as allProducts } from '@/data/product'
import { categories } from '@/data/category'

export const useFilteredProducts = (
	activeCategory: number | null,
	searchQuery: string,
	products: number[] = [],
	filterProducts: boolean = false,
) => {
	const filteredProducts = useMemo(() => {
		return allProducts.filter(product => {
			const matchesCategory = activeCategory
				? product.categoryId === activeCategory
				: true
			const matchesSearchQuery = product.name
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
			const matchesFavorites = filterProducts
				? products.includes(product.id)
				: true

			return matchesCategory && matchesSearchQuery && matchesFavorites
		})
	}, [activeCategory, searchQuery, products, filterProducts])

	const filteredCategories = useMemo(() => {
		return categories.filter(category =>
			category.name.toLowerCase().includes(searchQuery.toLowerCase()),
		)
	}, [searchQuery])

	return { filteredProducts, filteredCategories }
}
