import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_SC } from "next/font/google"
import "./globals.css"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
})

export const metadata: Metadata = {
  title: "MaiKaiDi",
  description: "Professional provider of comprehensive digital solutions including e-commerce platform development, website construction, and ERP system implementation. Drive business growth with technology and help your enterprise stand out in the digital era."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, ${notoSansSC.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-noto-sans-sc: ${notoSansSC.variable};
}
        `}</style>
      </head>
      <body className={`${notoSansSC.variable}`}>{children}</body>
    </html>
  )
}
