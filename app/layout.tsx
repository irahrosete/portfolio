import Link from 'next/link'
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
      <body className={`${rajdhani.className} max-w-3xl mx-auto py-10`}>
      <header>
        <Link href='/' className='bg-gradient-to-r 
          from-blue-300 
          to-blue-300 
          bg-clip-text 
          text-transparent text-2xl font-bold'>
          iRAH
        </Link>
      </header>
      <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
