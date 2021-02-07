import { AppProps } from "next/app";
import { Global } from "@emotion/react";

import { globalStyles } from "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
