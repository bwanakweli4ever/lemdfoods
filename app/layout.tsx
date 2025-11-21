import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "LEM D Foods - Same Flavour, Same Pleasure",
  description:
    "LEM D Foods • Organic Tropical Food, Spices & Beverages. Wholesale quality and logistics across the USA.",
  icons: {
    icon: "/images/lemd_logo.png",
    shortcut: "/images/lemd_logo.png",
    apple: "/images/lemd_logo.png",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} antialiased light`} style={{colorScheme: 'light'}}>
      <body className="font-nunito">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
