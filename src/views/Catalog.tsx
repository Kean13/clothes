'use client'

import { useState } from 'react'

import SearchInput from '@/components/layout/SearchInput'
import Category from '@/components/layout/Category/Category'
import Wrapper from '@/components/layout/Wrapper'

const CatalogView = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<div>
			<SearchInput onSearch={setSearchQuery} />
			<Wrapper useTop useBottom>
				<Category view='list' searchQuery={searchQuery} />
			</Wrapper>
		</div>
	)
}

export default CatalogView
