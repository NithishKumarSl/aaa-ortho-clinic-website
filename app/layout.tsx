import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AAA Ortho Clinic — Expert Bone & Joint Pain Treatment | Pattukkottai",
  description:
    "Official website of AAA Ortho Clinic – Orthopedic Care. Expert bone & joint pain treatment in Pattukkottai, trusted orthopaedic care for families.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aaaorthoclinic.com/" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
