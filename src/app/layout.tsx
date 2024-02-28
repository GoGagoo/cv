import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

import "./globals.css"
import React from "react"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
