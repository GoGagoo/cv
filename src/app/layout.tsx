import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { RESUME_DATA } from "@/data/resume-data"
import React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | Frontend-разработчик`,
  description: RESUME_DATA.summary,
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
