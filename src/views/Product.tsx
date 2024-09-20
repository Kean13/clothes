'use client'

import { FC } from 'react'

import Image from 'next/image'
import { notFound } from 'next/navigation'

import { products } from '@/data/product'
import { categories } from '@/data/category'

import Wrapper from '@/components/layout/Wrapper'
import Header from '@/components/layout/Header'
import ProductPrice from '@/components/layout/Product/ProductPrice'
import CartButton from '@/components/layout/Product/CartButton'
import FavoriteButton from '@/components/layout/Product/FavoriteButton'

import { Card, CardContent } from '@/components/default/Card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/default/Carousel'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/default/Accordion'
import { useShopCart } from '@/hooks/use-cart'

interface PriceProps {
	price: number
	priceMultiplier: number
}

const Price: FC<PriceProps> = ({ price, priceMultiplier }) => {
	const shopSale = price - price * priceMultiplier
	return (
		<>
			<ProductPrice price={price} priceMultiplier={priceMultiplier} />
			<div className='w-full flex justify-between'>
				<span className='font-semibold text-foreground-subtitle'>
					Скидка магазина
				</span>
				<span className='font-semibold'>
					-{shopSale.toLocaleString('ru-RU')}₽
				</span>
			</div>
		</>
	)
}

interface ProductProps {
	id: number
}

const ProductView: FC<ProductProps> = ({ id }) => {
	const product = products.find(p => p.id === id)
	const { shopCart, handleCartClick } = useShopCart(id)

	if (!product) return notFound()

	const category = categories.find(c => c.id === product.categoryId)

	return (
		<Wrapper useBottom>
			<Carousel className='w-full'>
				<CarouselContent>
					{product.images.map((link, index) => (
						<CarouselItem key={index} className='p-0'>
							<div>
								<Card className='border-none'>
									<CardContent className='relative items-center justify-center w-full h-56'>
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
			<Header
				title={product.name}
				subtitle={category?.name || 'Категория'}
			/>
			<div className='p-4'>
				<Price
					price={product.price}
					priceMultiplier={product.priceMultiplier}
				/>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Описание</AccordionTrigger>
						<AccordionContent>{product.desc}</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion type='single' collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger>Характеристики</AccordionTrigger>
						<AccordionContent>
							{product.params.map((param, index) => (
								<div key={index} className='w-full'>
									{Object.entries(param).map(
										([key, value], idx) => (
											<div
												key={idx}
												className='flex justify-between'
											>
												<span className='font-semibold text-foreground-subtitle'>
													{value[0]}
												</span>
												<span className='font-semibold'>
													{value[1]}
												</span>
											</div>
										),
									)}
								</div>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<CartButton
					isAddedToCart={shopCart}
					addToCart={handleCartClick}
				/>
			</div>
		</Wrapper>
	)
}

export default ProductView
