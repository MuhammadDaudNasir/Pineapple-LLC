import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pineapple LLC - Digital Solutions",
  description: "Innovative digital solutions for modern businesses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'