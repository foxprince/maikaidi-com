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
  title: "迈凯迪科技 - 专业电商平台开发与ERP系统搭建",
  description: "专业提供电商平台开发、网站搭建、ERP系统搭建等数字化解决方案，助力企业数字化转型",
  generator: "v0.app",
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
