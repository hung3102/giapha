import "@/styles/globals.css";
import "@/components/ChartContainer.css";
import "@/components/ChartNode.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
