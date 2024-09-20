'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/data/product'
import FavoriteButton from '@/components/layout/Product/FavoriteButton'
import ProductPrice from '@/components/layout/Product/ProductPrice'
import SaleBadge from '@/components/layout/Product/SaleBadge'
import { useFavorite } from '@/hooks/use-favorite'
import { Card, CardContent } from '@/components/default/Card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/default/Carousel'

interface ProductProps {
	id: number
	showFavoriteButton: boolean
}

const Product: FC<ProductProps> = ({ id, showFavoriteButton }) => {
	const product = products.find(product => product.id === id)
	const { favorite, handleFavoriteClick } = useFavorite(id)

	if (!product) {
		return null
	}

	return (
		<div>
			<div className='h-56 w-full relative'>
				<Link href={`/product/${id}`}>
					<Carousel className='w-full'>
						<CarouselContent>
							{product.images.map((link, index) => (
								<CarouselItem key={index} className='p-0'>
									<div>
										<Card className='border-none'>
											<CardContent className='relative items-center justify-center h-56 w-full'>
												<Image
													key={index}
													src={link}
													alt={product.name}
													fill
													objectFit='cover'
												/>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</Link>

				<div className='absolute top-[-0.05rem] right-[-0.5rem]'>
					<FavoriteButton
						show={showFavoriteButton}
						isFavorite={favorite}
						toggleFavorite={handleFavoriteClick}
					/>
				</div>
				{product.priceMultiplier !== 1 && (
					<SaleBadge sale={100 - product.priceMultiplier * 100} />
				)}
			</div>
			<Link href={`/product/${id}`}>
				<div className='p-[0.4rem]'>
					<ProductPrice
						price={product.price}
						priceMultiplier={product.priceMultiplier}
					/>
					<p>{product.name}</p>
				</div>
			</Link>
		</div>
	)
}

export default Product
