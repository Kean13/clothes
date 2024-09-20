'use client'

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react'

interface CartContextType {
	cart: number[]
	addToCart: (id: number) => void
	removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
	children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<number[]>([])

	useEffect(() => {
		const savedCart = JSON.parse(localStorage.getItem('Cart') || '[]')
		setCart(savedCart)
	}, [])

	const addToCart = (id: number) => {
		setCart(prev => {
			const updatedCart = [...prev, id]
			localStorage.setItem('Cart', JSON.stringify(updatedCart))
			return updatedCart
		})
	}

	const removeFromCart = (id: number) => {
		setCart(prev => {
			const updatedCart = prev.filter(favId => favId !== id)
			localStorage.setItem('Cart', JSON.stringify(updatedCart))
			return updatedCart
		})
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)

	if (!context) throw new Error('useCart must be used within a CartProvider')

	return context
}
