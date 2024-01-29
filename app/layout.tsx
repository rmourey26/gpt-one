import { useSelectedLayoutSegments } from 'next/navigation';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import NextAuthProvider from '@/app/context/NextAuthProvider';
import { ReactNode } from 'react';
import React from 'react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`inter.className`}>
        <NextAuthProvider>
          <div className="w-10/12 m-auto text-center bg-white flex flex-col min-h-screen">
            <div>
              <Navbar />
            </div>
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );