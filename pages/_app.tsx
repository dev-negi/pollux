import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { fetchAppSettings } from '../utils'
import { useDispatch } from 'react-redux'
import { updateSettings } from '../redux/appSettings'
import AppWrapper from './AppWrapper'

const roboto = Roboto({
  subset: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})
let initData = null

export default function App({ Component, pageProps, stars }: AppProps) {
  return (
    <Provider store={store}>
      <AppWrapper stars={stars}>
        <div className={`${roboto.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </AppWrapper>
    </Provider>
  )
}
setInterval(() => {
  initData = null
}, 1000 * 60 * 5)

App.getInitialProps = async () => {
  //TODO - find a better way to not do multiple calls

  initData = initData || (await fetchAppSettings())
  const appsettings = initData.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: item.value }),
    {}
  )

  return {
    stars: { appsettings },
  }
}
