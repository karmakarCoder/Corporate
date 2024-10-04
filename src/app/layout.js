import { Mulish } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--mulish",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--openSans",
  display: "swap",
});

export const metadata = {
  title: "Corporate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
