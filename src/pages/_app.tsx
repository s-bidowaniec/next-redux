import '../styles/globals.css'

import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
  )
}
