// import './globals.css'
import FooterScreen from '@/components/layouts/footer.layout'
import HeaderScreen from '@/components/layouts/header.layout'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderScreen/>
        {children}
        {/* <FooterScreen/> */}
      </body>
      
    </html>
  )
}
