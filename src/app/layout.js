import { Figtree, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import ReduxProvider from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryProvider from "@/providers/QueryProvider";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-figtree",
  display: "swap",
});

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-abhaya",
  display: "swap",
});

export const metadata = {
  title: "India's Best Lab Grown Diamond Jewellery Brand - Lucira Jewelry",
  description: "Shop premium diamond jewellery online in India at Lucira Jewelry. Discover elegant lab grown diamond designs, certified quality, modern craftsmanship, and timeless styles crafted for every occasion. Shop now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${abhaya.variable} antialiased`}>
        <ReduxProvider>
          <QueryProvider> 
            <Header />
            {children}
          </QueryProvider>
        </ReduxProvider>
         <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={true}
          theme="light"
        />   
      </body>
    </html>
  );
}
