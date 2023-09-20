import "@/styles/globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "../components/header/header";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div style={inter.style}>
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
