import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core';
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New Frontier Art",
  description: "The forever home of long-form generative art. Create, collect, and connect today. Pioneering the digital art revolution, one hash and group chat at a time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider>
          <div className="absolute inset-0 z-0">
            <img src="/background.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="flex min-h-screen flex-col items-center justify-between relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
