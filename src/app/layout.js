import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Nav/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
