import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/component/Header'
import Footer from '@/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '©copyright',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <div className="container mx-auto p-20 min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
