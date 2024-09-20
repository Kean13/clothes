'use client'

import { useState } from 'react'

import Wrapper from '@/components/layout/Wrapper'
import Category from '@/components/layout/Category/Category'
import SearchInput from '@/components/layout/SearchInput'
import Banner from '@/components/layout/Banner'

const HomeView = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<div>
			<SearchInput onSearch={setSearchQuery} />
			<Wrapper useBottom useTop>
				<Banner />
				<Category view='scroll' searchQuery={searchQuery} />
			</Wrapper>
		</div>
	)
}

export default HomeView
