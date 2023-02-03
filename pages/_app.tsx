import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
	getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout || ((page) => page)
	// ! Esto lo que hace es revisar los estilos (traerse los layouts), lo que se encuentran dentro del getLayout son estilos que persisten y no van a cambiar entonces no necesita re renderizarlos.
	return getLayout(<Component {...pageProps} />)
}
