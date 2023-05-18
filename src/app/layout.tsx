import './globals.scss'
import globals from './globals.module.scss'
import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from './components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: '%s',
  description: '%s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={montserrat.className}>
        <Header/>
        <main className={globals.wrapper}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
