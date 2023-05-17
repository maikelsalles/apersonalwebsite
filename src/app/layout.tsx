import './globals.scss'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: 'Personal website',
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
        <header className="wrapper">
          <Image
            src="/img/maikel-salles-logo.svg"
            width={80}
            height={80}
            alt="The Maikel Salles logo. It's the initials MS jointed on a white and curved line with a blue dot in the bottom right corner."
          />
          <nav>
              <a href="https://www.linkedin.com/in/maikelsalles/" title="View Maikel Salles Resume on LinedIn" target="_blank">Resume</a>
              <a href="https://www.behance.net/maikelsalles" target="_blank">Portfolio</a>
              <a href="https://www.linkedin.com/in/maikelsalles/overlay/contact-info/" target="_blank">Contact</a>
          </nav>
        </header>
        <main className="wrapper">
          {children}
        </main>
        <footer className="wrapper">
          <small>
              Imagem de <a href="https://pixabay.com/pt/users/19541953-19541953/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939">Ludovico Gianotti</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939">Pixabay</a>
          </small>
        </footer>
      </body>
    </html>
  )
}
