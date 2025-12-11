import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lumuno Waitlist",
  description: "Join the Lumuno waitlist to stay updated.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
