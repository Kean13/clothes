import { FC } from 'react'

interface ProductPriceProps {
	price: number
	priceMultiplier: number
}

const ProductPrice: FC<ProductPriceProps> = ({ price, priceMultiplier }) => {
	const finalPrice = Math.round(price * priceMultiplier).toLocaleString(
		'ru-RU',
	)
	const originalPrice = price.toLocaleString('ru-RU')

	return (
		<div
			className={`text-lg font-bold flex items-center ${
				priceMultiplier === 1 ? 'text-foreground' : 'text-button'
			}`}
		>
			{finalPrice} ₽
			{priceMultiplier !== 1 && (
				<span className='ml-2 text-base font-medium text-foreground-subtitle line-through'>
					{originalPrice} ₽
				</span>
			)}
		</div>
	)
}

export default ProductPrice
