import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import "./globals.css";
import "./favicon.ico";
import { Inter, Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["400"] });


export const metadata = {
  title: {
    default: "Qwik Deen  ",
    template: `Qwik Deen | %s`,
  },
  description: "Created By Qwik IT Web Team",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light">
      <head></head>

      <body className={inter.className}>
        <Navbar />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
