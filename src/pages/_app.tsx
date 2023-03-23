import type { AppProps } from "next/app";
import "styles/globals.css";
import "styles/reset.css";
import { Inter } from "next/font/google";
import { Footer } from "components/Footer";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
