import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../Components/header";
import ActiveSectionContextProvider from "@/Components/context/active-section-context";
import ThemeProvider from "@/app/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/footer";
import ThemeToggle from "@/Components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dana | Software Developer",
  description: "Dana is a software developer with 10 years of experience"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative py-28 sm:py-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="-z-10 bg-[#c3ddfa] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#7e9ebf] dark:bg-opacity-70"></div>
        <div className="-z-10 bg-[#f5ecd7] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#877449] dark:bg-opacity-70"></div>
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
