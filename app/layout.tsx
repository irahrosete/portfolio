import './globals.css'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Irah Rosete',
  description: 'Portfolio website 2.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>{children}</body>
    </html>
  )
}
