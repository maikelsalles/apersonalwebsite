"use client"

import './globals.scss'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

import DarkLogo from '../../public/img/maikel-salles-logo-light.svg';
import LightLogo from '../../public/img/maikel-salles-logo-dark.svg';
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({ subsets: ['latin'] })

const navlinks = [
  { href: "/about", label: "About" },
  { href: "https://www.linkedin.com/in/maikelsalles/", title: "View Maikel Salles Resume on LinedIn", label: "Resume", target: "_blank" },
  { href: "https://www.behance.net/maikelsalles", label: "Portfolio", target: "_blank" },
  { href: "https://www.linkedin.com/in/maikelsalles/overlay/contact-info/", label: "Contact", target: "_blank"}
]


export const metadata = {
  title: '%s - Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: '%s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname();

  return (
    <html lang="en">
      <meta charSet='utf-8'/>
      <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={montserrat.className}>
        <header className="wrapper">
          <Link href="" title="Home page">
            <picture>
              <source srcSet={DarkLogo.src} media="(prefers-color-scheme: dark)" />
              <Image
                  src={LightLogo}
                  alt="The Maikel Salles logo. It's the initials MS jointed on a white and curved line with a blue dot in the bottom right corner."
                  width={80}
                  height={80}
              />
            </picture>
          </Link>
          <nav>
              { navlinks.map((link) => (
                <Link
                  key={ link.href }
                  href={ link.href }
                  title={ link.title }
                  target={ link.target }
                  className={link.href === path ? 'active' : ''}
                >
                  { link.label }
                </Link>
              )

              )}
          </nav>
        </header>
        <main className="wrapper">
          {children}
        </main>
        <footer className="wrapper">
          <small>
              Imagem de <a href="https://pixabay.com/pt/users/19541953-19541953/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939" target="_blank">Ludovico Gianotti</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939" target="_blank">Pixabay</a>
          </small>
        </footer>
      </body>
    </html>
  )
}
