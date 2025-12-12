import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lumuno Waitlist",
  description: "Join the Lumuno waitlist to stay updated.",
  manifest: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico` },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2L9SS26RRW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2L9SS26RRW');
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
