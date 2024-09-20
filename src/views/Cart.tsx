'use client'

import Header from '@/components/layout/Header'
import Wrapper from '@/components/layout/Wrapper'
import ProductGrid from '@/components/layout/Product/ProductGrid'

import { useCart } from '@/context/context-cart'
import { useFilteredProducts } from '@/hooks/use-filtered-products'

import { pf } from '@/lib/utils'

const CartView = () => {
	const { cart } = useCart()
	const { filteredProducts } = useFilteredProducts(null, '', cart, true)

	const count = cart.length
	const word = pf(count, 'товар', 'товара', 'товаров')

	return (
		<div>
			{filteredProducts.length === 0 ? (
				<Wrapper
					useBottom
					className='w-full h-screen flex items-center justify-center'
				>
					<span className='text-xl text-foreground-subtitle'>
						Ваша корзина пуста
					</span>
				</Wrapper>
			) : (
				<div>
					<Header title='Корзина' subtitle={`${count} ${word}`} />
					<Wrapper useBottom>
						<ProductGrid
							products={filteredProducts}
							showFavoriteButton={false}
						/>
					</Wrapper>
				</div>
			)}
		</div>
	)
}

export default CartView
