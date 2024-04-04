'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Topbar from '@components/Topbar';
import './globals.css';
import { AuthContextProvider } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContextProvider>
          <Topbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}

//testing
