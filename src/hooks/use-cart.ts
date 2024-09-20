import { useCart } from '@/context/context-cart'

export const useShopCart = (productId: number) => {
	const { cart, addToCart, removeFromCart } = useCart()
	const shopCart = cart.includes(productId)

	const handleCartClick = () => {
		if (shopCart) {
			removeFromCart(productId)
		} else {
			addToCart(productId)
		}
	}

	return { shopCart, handleCartClick }
}
