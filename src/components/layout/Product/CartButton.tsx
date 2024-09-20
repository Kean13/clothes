import { FC } from 'react'
import { Button } from '@/components/default/Button'
import { toast } from '@/hooks/use-toast'

interface CartButtonProps {
	isAddedToCart: boolean
	addToCart: () => void
}

const CartButton: FC<CartButtonProps> = ({ isAddedToCart, addToCart }) => {
	const handleClick = () => {
		toast({
			title: `Товар ${
				isAddedToCart ? 'удален из корзины' : 'добавлен в корзину'
			}`,
		})
		addToCart()
	}

	return (
		<Button
			className='w-full font-bold'
			size='lg'
			variant={`${isAddedToCart ? 'ghost' : 'default'}`}
			onClick={handleClick}
		>
			{isAddedToCart ? 'В корзине' : 'Добавить в корзину'}
		</Button>
	)
}

export default CartButton
