'use client'

import { type PropsWithChildren, useEffect } from 'react'
import {
	SDKProvider,
	useLaunchParams,
	useMiniApp,
	useThemeParams,
	useViewport,
	bindMiniAppCSSVars,
	bindThemeParamsCSSVars,
	bindViewportCSSVars,
	useSwipeBehavior,
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { useTelegramMock } from '@/hooks/use-telegram-mock'
import { useDidMount } from '@/hooks/use-did-mount'
import { ErrorBoundary } from '@/components/template/ErrorBoundary'
import { ErrorPage } from '@/components/template/ErrorPage'
import { BackButton } from '@/components/template/BackButton'

interface RootProps extends PropsWithChildren {
	className?: string
}

function App(props: PropsWithChildren) {
	const lp = useLaunchParams()
	const miniApp = useMiniApp()
	const themeParams = useThemeParams()
	const viewport = useViewport()
	const swipeBehavior = useSwipeBehavior()

	useEffect(() => {
		viewport?.expand()
		swipeBehavior.disableVerticalSwipe()
	}, [miniApp, viewport, swipeBehavior])

	useEffect(() => {
		return bindMiniAppCSSVars(miniApp, themeParams)
	}, [miniApp, themeParams])

	useEffect(() => {
		return bindThemeParamsCSSVars(themeParams)
	}, [themeParams])

	useEffect(() => {
		return viewport && bindViewportCSSVars(viewport)
	}, [viewport])

	return (
		<AppRoot
			appearance={miniApp.isDark ? 'dark' : 'light'}
			platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
		>
			{props.children}
			<BackButton />
		</AppRoot>
	)
}

function RootInner({ children, className }: RootProps) {
	useTelegramMock()

	return (
		<SDKProvider acceptCustomStyles>
			<div className={className}>
				<App>{children}</App>
			</div>
		</SDKProvider>
	)
}

export function Root({ className, ...props }: RootProps) {
	const didMount = useDidMount()

	return didMount ? (
		<ErrorBoundary fallback={ErrorPage}>
			<RootInner className={className} {...props} />
		</ErrorBoundary>
	) : null
}
