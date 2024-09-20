'use client'

import { useParams, notFound } from 'next/navigation'
import { products } from '@/data/product'

import ProductView from '@/views/Product'

export default function Product() {
	const { id } = useParams() as { id: string }
	const toNumberId = Number(id)

	const product = products.find(product => product.id === toNumberId)
	if (!product) return notFound()

	return <ProductView id={toNumberId} />
}
