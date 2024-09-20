'use client'

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react'

interface FavoritesContextType {
	favorites: number[]
	addFavorite: (id: number) => void
	removeFavorite: (id: number) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined,
)

interface FavoritesProviderProps {
	children: ReactNode
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
	const [favorites, setFavorites] = useState<number[]>([])

	useEffect(() => {
		const savedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]',
		)
		setFavorites(savedFavorites)
	}, [])

	const addFavorite = (id: number) => {
		setFavorites(prev => {
			const updatedFavorites = [...prev, id]
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
			return updatedFavorites
		})
	}

	const removeFavorite = (id: number) => {
		setFavorites(prev => {
			const updatedFavorites = prev.filter(favId => favId !== id)
			localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
			return updatedFavorites
		})
	}

	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	)
}

export const useFavorites = () => {
	const context = useContext(FavoritesContext)

	if (!context)
		throw new Error('useFavorites must be used within a FavoritesProvider')

	return context
}
