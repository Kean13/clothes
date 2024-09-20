import { Input } from '@/components/default/Input'
import { Search } from 'lucide-react'

interface SearchProps {
	onSearch: (query: string) => void
}

const SearchInput: React.FC<SearchProps> = ({ onSearch }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value)
	}

	return (
		<div className='fixed top-0 w-full z-50 p-4 py-3 bg-background'>
			<Input
				placeholder='Название, артикул или бренд'
				Icon={Search}
				className='h-12 font-medium text-base'
				onChange={handleChange}
			/>
		</div>
	)
}

export default SearchInput
