import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const roboto = Roboto({
  subset: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${roboto.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
