import { Product } from '@/types/product'

export const products: Product[] = [
	{
		id: 1,
		categoryId: 1,
		name: 'Футболка #1',
		desc: 'Стильная и удобная белая футболка из мягкого материала для повседневной носки',
		priceMultiplier: 0.9,
		price: 2000,
		sizes: [],
		params: [
			{
				brand: ['Коллабарация', 'Stussy X Nike'],
				color: ['Цвет', 'Белый'],
				mat: ['Материал', 'Хлопок'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/ndsWmOd.jpeg',
			'https://i.imgur.com/MjwYZp9.jpeg',
		],
	},
	{
		id: 2,
		categoryId: 1,
		name: 'Футболка #2',
		desc: 'Стильная и удобная черная футболка из мягкого материала для повседневной носки',
		priceMultiplier: 1,
		price: 2000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'GAP'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Хлопок'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/db3zhfO.jpeg',
			'https://i.imgur.com/JF681DS.jpeg',
		],
	},
	{
		id: 3,
		categoryId: 1,
		name: 'Футболка #3',
		desc: 'Стильная и удобная черная футболка из мягкого материала для повседневной носки',
		priceMultiplier: 1,
		price: 2500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Nike'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Хлопок'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/4Asrglj.jpeg',
			'https://i.imgur.com/8rVauFM.jpeg',
		],
	},
	{
		id: 4,
		categoryId: 1,
		name: 'Футболка #4',
		desc: 'Стильная и удобная белая футболка из мягкого материала для повседневной носки',
		priceMultiplier: 0.5,
		price: 2000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Carhartt'],
				color: ['Цвет', 'Белый'],
				mat: ['Материал', 'Хлопок'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/wbbn058.jpeg',
			'https://i.imgur.com/WJmcWBH.jpeg',
		],
	},

	{
		id: 5,
		categoryId: 2,
		name: 'Джинсы #1',
		desc: 'Классические джинсы с идеальной посадкой для комфортного повседневного ношения',
		priceMultiplier: 1,
		price: 3500,
		sizes: [],
		params: [
			{
				brand: ['Коллабарация', 'Stussy X Levis'],
				color: ['Цвет', 'Хаки'],
				mat: ['Материал', 'Деним'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/rjyF5Bl.jpeg',
			'https://i.imgur.com/UoeT5oO.jpeg',
		],
	},
	{
		id: 6,
		categoryId: 2,
		name: 'Джинсы #2',
		desc: 'Классические джинсы с идеальной посадкой для комфортного повседневного ношения',
		priceMultiplier: 0.5,
		price: 3500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Carhartt'],
				color: ['Цвет', 'Серый'],
				mat: ['Материал', 'Деним'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/SsErB3h.jpeg',
			'https://i.imgur.com/8r2MRfQ.jpeg',
		],
	},
	{
		id: 7,
		categoryId: 2,
		name: 'Джинсы #3',
		desc: 'Классические джинсы с идеальной посадкой для комфортного повседневного ношения',
		priceMultiplier: 0.7,
		price: 3500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Carhartt'],
				color: ['Цвет', 'Синий'],
				mat: ['Материал', 'Деним'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/Jnk9jim.jpeg',
			'https://i.imgur.com/o35RYeC.jpeg',
		],
	},
	{
		id: 8,
		categoryId: 2,
		name: 'Джинсы #4',
		desc: 'Классические джинсы с идеальной посадкой для комфортного повседневного ношения',
		priceMultiplier: 0.7,
		price: 3500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Carhartt'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Деним'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/zPsQ3Mq.jpeg',
			'https://i.imgur.com/Om1YMXN.jpeg',
		],
	},

	{
		id: 9,
		categoryId: 4,
		name: 'Сумка #1',
		desc: 'Компактная сумка через плечо с множеством отделений — идеальный выбор для активного дня',
		priceMultiplier: 0.9,
		price: 1500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Stone Island'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Полиэстер'],
				country: ['Страна', 'Россия'],
			},
		],
		images: ['https://i.imgur.com/OFJzzxJ.jpeg'],
	},
	{
		id: 10,
		categoryId: 4,
		name: 'Сумка #2',
		desc: 'Компактная сумка через плечо с множеством отделений — идеальный выбор для активного дня',
		priceMultiplier: 0.9,
		price: 1500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Nike'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Полиэстер'],
				country: ['Страна', 'Россия'],
			},
		],
		images: ['https://i.imgur.com/ff9YevU.jpeg'],
	},
	{
		id: 11,
		categoryId: 4,
		name: 'Сумка #3',
		desc: 'Компактная сумка через плечо с множеством отделений — идеальный выбор для активного дня',
		priceMultiplier: 1,
		price: 1500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'The Horth Face'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Полиэстер'],
				country: ['Страна', 'Россия'],
			},
		],
		images: ['https://i.imgur.com/X7dmduO.jpeg'],
	},
	{
		id: 12,
		categoryId: 4,
		name: 'Сумка #4',
		desc: 'Компактная сумка через плечо с множеством отделений — идеальный выбор для активного дня',
		priceMultiplier: 0.7,
		price: 1500,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Nike'],
				color: ['Цвет', 'Синий'],
				mat: ['Материал', 'Полиэстер'],
				country: ['Страна', 'Россия'],
			},
		],
		images: ['https://i.imgur.com/sk2JFGR.jpeg'],
	},

	{
		id: 13,
		categoryId: 3,
		name: 'Свитер #1',
		desc: 'Теплый и мягкий свитер — отличный выбор для прохладных дней',
		priceMultiplier: 0.9,
		price: 4000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Nike'],
				color: ['Цвет', 'Белый Х Черный'],
				mat: ['Материал', 'Акрил'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/IetNSx0.jpeg',
			'https://i.imgur.com/mFYyAp7.jpeg',
		],
	},
	{
		id: 14,
		categoryId: 3,
		name: 'Свитер #2',
		desc: 'Теплый и мягкий свитер — отличный выбор для прохладных дней',
		priceMultiplier: 1,
		price: 4000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'GAP'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Акрил'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/G3aEmTs.jpeg',
			'https://i.imgur.com/21s6xt2.jpeg',
		],
	},
	{
		id: 15,
		categoryId: 3,
		name: 'Свитер #3',
		desc: 'Теплый и мягкий свитер — отличный выбор для прохладных дней',
		priceMultiplier: 0.5,
		price: 4000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Stussy'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Акрил'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/LM1dadL.jpeg',
			'https://i.imgur.com/rs5qoFo.jpeg',
		],
	},
	{
		id: 16,
		categoryId: 3,
		name: 'Свитер #4',
		desc: 'Теплый и мягкий свитер — отличный выбор для прохладных дней',
		priceMultiplier: 1,
		price: 4000,
		sizes: [],
		params: [
			{
				brand: ['Бренд', 'Stone Island'],
				color: ['Цвет', 'Черный'],
				mat: ['Материал', 'Акрил'],
				country: ['Страна', 'Россия'],
			},
		],
		images: [
			'https://i.imgur.com/75x9F62.jpeg',
			'https://i.imgur.com/BJySAEX.jpeg',
		],
	},
]
