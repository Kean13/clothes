'use client'

import { useToast } from '@/hooks/use-toast'
import {
	Toast,
	ToastDescription,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from '@/components/default/Toast'

export function Toaster() {
	const { toasts } = useToast()

	return (
		<ToastProvider>
			{toasts.map(function ({
				id,
				title,
				description,
				action,
				...props
			}) {
				return (
					<Toast key={id} {...props}>
						<div className='grid gap-1'>
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && (
								<ToastDescription>
									{description}
								</ToastDescription>
							)}
						</div>
						{action}
					</Toast>
				)
			})}
			<ToastViewport />
		</ToastProvider>
	)
}
