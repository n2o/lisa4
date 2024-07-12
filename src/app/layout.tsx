import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/tailwind.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01'] ${inter.className}`}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
