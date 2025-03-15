import type { Metadata } from "next";
import "./ui/globals.css";
import "@/app/ui/home.module.css"
import NavBar from "./ui/dashboard/navigation";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: "Todo app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className='bg-special-100 text-special-50'>
          <NavBar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
