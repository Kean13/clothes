import './globals.css'

import { Nunito } from 'next/font/google'
import type { Viewport } from 'next'

import { FavoritesProvider } from '@/context/context-favorites'
import { CartProvider } from '@/context/context-cart'

import Navbar from '@/components/layout/Navbar/NavBar'
import { Toaster } from '@/components/default/Toaster'
import { Root } from '@/components/template/Root'

const font = Nunito({ subsets: ['cyrillic'] })

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${font.className} h-screen overflow-hidden`}>
				<Root className='h-full overflow-y-scroll'>
					<CartProvider>
						<FavoritesProvider>
							{children}
							<Toaster />
							<Navbar />
						</FavoritesProvider>
					</CartProvider>
				</Root>
			</body>
		</html>
	)
}
