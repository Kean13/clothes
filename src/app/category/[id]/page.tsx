'use client'

import { useParams, notFound } from 'next/navigation'
import { categories } from '@/data/category'
import CategoryView from '@/views/Category'

export default function Category() {
	const { id } = useParams() as { id: string }
	const toNumberId = Number(id)

	const category = categories.find(category => category.id === toNumberId)
	if (!category) return notFound()

	return <CategoryView id={toNumberId} />
}
