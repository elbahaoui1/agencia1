import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'; // Correct font import
import "./globals.css";

// Importing Google font "Roboto" with the appropriate weights.
const roboto = Montserrat({
  weight: ['100', '200', '300', '500', '600','700'],  // Choose the font weights you need
  subsets: ['latin'],  // Use the 'latin' subset to support common characters
});

export const metadata: Metadata = {
  title: "Agency",
  description: "Agency - Your platform for success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
