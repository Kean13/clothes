import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function pf(
	count: number,
	singular: string,
	few: string,
	many: string,
): string {
	const mod10 = count % 10
	const mod100 = count % 100

	if (mod10 === 1 && mod100 !== 11) {
		return singular
	} else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
		return few
	} else {
		return many
	}
}
