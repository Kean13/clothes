import { FC } from 'react'
import { Product } from '@/types/product'
import _Product from '@/components/layout/Product/Product'

interface ProductGridProps {
	showFavoriteButton: boolean
	products: Product[]
}

const ProductGrid: FC<ProductGridProps> = ({
	products,
	showFavoriteButton,
}) => {
	return (
		<div className='grid grid-cols-2 min-[460px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 min-[1400px]:grid-cols-8 min-[1600px]:grid-cols-10 gap-1 py-2 pt-0 overflow-x-hidden'>
			{products.map(product => (
				<_Product
					key={product.id}
					id={product.id}
					showFavoriteButton={showFavoriteButton}
				/>
			))}
		</div>
	)
}

export default ProductGrid
