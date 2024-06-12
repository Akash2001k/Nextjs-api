import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers"; // Ensure correct path

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js APIs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log('RootLayout rendering'); // Debug log
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
