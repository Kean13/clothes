export interface Product {
	id: number
	categoryId: number
	name: string
	desc: string
	priceMultiplier: number
	price: number
	sizes: { size: string; stock: number }[]
	params: {
		brand: [name: string, param: string]
		color: [name: string, param: string]
		mat: [name: string, param: string]
		country: [name: string, param: string]
	}[]
	images: string[]
}
