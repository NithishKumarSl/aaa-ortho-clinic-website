import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AAA Ortho Clinic — Expert Bone & Joint Pain Treatment | Pattukkottai",
  description:
    "AAA Ortho Clinic - Expert bone & joint pain treatment in Pattukkottai. Trusted orthopaedic care for families.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
