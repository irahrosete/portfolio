import Link from 'next/link'
import '../globals.css'
import { Rajdhani } from 'next/font/google'
import { getPages } from '@/sanity/utils'
import Image from 'next/image'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Irah Rosete',
  description: 'Portfolio website 2.0',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages()

  return (
    <html lang="en">
      <body className={`${rajdhani.className} max-w-3xl mx-auto py-10`}>
      <header className='flex items-center justify-between'>
        <Link href='/'>
          <Image src='/../public/irah-logo.png' alt='logo' width={50} height={50}/>
        </Link>
        <div className='flex items-center gap-5'>
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`} className='hover:underline text-xl'>
              {page.title}
            </Link>
          ))}
        </div>
      </header>
      <main className='py-20'>{children}</main>
      </body>
    </html>
  )
}
