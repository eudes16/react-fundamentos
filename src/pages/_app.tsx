import '../app/globals.css'
import { AppContext, AppProps } from 'next/app'

type TProps = Pick<AppProps, "Component" | "pageProps"> & {}


const App = ({ Component, pageProps }: TProps) => {
    return <Component {...pageProps} />
}

export default App