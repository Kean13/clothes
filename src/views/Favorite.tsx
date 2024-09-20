'use client'

import Header from '@/components/layout/Header'
import Wrapper from '@/components/layout/Wrapper'
import ProductGrid from '@/components/layout/Product/ProductGrid'

import { pf } from '@/lib/utils'
import { useFilteredProducts } from '@/hooks/use-filtered-products'
import { useFavorites } from '@/context/context-favorites'

const FavoriteView = () => {
	const { favorites } = useFavorites()
	const { filteredProducts } = useFilteredProducts(null, '', favorites, true)

	const count = favorites.length
	const word = pf(count, 'товар', 'товара', 'товаров')

	return (
		<div>
			{filteredProducts.length === 0 ? (
				<Wrapper
					useBottom
					className='w-full h-screen flex items-center justify-center'
				>
					<span className='text-xl text-foreground-subtitle'>
						У вас нет избранных
					</span>
				</Wrapper>
			) : (
				<div>
					<Header title='Избранное' subtitle={`${count} ${word}`} />
					<Wrapper useBottom>
						<ProductGrid
							products={filteredProducts}
							showFavoriteButton
						/>
					</Wrapper>
				</div>
			)}
		</div>
	)
}

export default FavoriteView
