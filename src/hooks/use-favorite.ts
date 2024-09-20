import { useFavorites } from '@/context/context-favorites'

export const useFavorite = (productId: number) => {
	const { favorites, addFavorite, removeFavorite } = useFavorites()
	const favorite = favorites.includes(productId)

	const handleFavoriteClick = () => {
		if (favorite) {
			removeFavorite(productId)
		} else {
			addFavorite(productId)
		}
	}

	return { favorite, handleFavoriteClick }
}
