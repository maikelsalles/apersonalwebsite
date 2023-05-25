"use client"

import Link from 'next/link'
import Image from 'next/image'

import DarkLogo from '@img/maikel-salles-logo-light.svg'
import LightLogo from '@img/maikel-salles-logo-dark.svg'

import { usePathname } from "next/navigation"
import globals from "../../globals.module.scss"
import styles from "./header.module.scss"

const navlinks = [
    { href: "/about", label: "About" },
    { href: "https://www.linkedin.com/in/maikelsalles/", title: "View Maikel Salles Resume on LinedIn", label: "Resume", target: "_blank" },
    { href: "https://www.behance.net/maikelsalles", label: "Portfolio", target: "_blank" },
    { href: "/contact", label: "Contact"}
  ]

export default function Header() {

    const path = usePathname();
    return (    
        <header className={`${styles.header} ${globals.wrapper}`}>
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
          <nav className={styles.nav}>
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
    )
}