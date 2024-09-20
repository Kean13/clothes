import { FC } from 'react'
import { Button } from '@/components/default/Button'
import { Heart } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface FavoriteButtonProps {
	show: boolean
	isFavorite: boolean
	toggleFavorite: () => void
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
	show,
	isFavorite,
	toggleFavorite,
}) => {
	if (!show) return null

	const handleClick = () => {
		toast({
			title: `Товар ${
				isFavorite ? 'удален из избранного' : 'добавлен в избранное'
			}`,
		})
		toggleFavorite()
	}

	return (
		<Button className='bg-inherit text-red' onClick={handleClick}>
			<Heart
				className='w-6 h-6 transition-colors'
				fill={`var(${isFavorite ? '--red' : '--tg-theme-bg-color'})`}
				strokeWidth={0}
			/>
		</Button>
	)
}

export default FavoriteButton
