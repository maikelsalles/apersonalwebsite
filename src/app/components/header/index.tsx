"use client"

import Link from 'next/link'
import Image from 'next/image'

import React, { useEffect, useState } from "react";

import DarkLogo from '@img/maikel-salles-logo-light.svg'
import LightLogo from '@img/maikel-salles-logo-dark.svg'

import { usePathname } from "next/navigation"
import globals from "../../globals.module.scss"
import styles from "./header.module.scss"

const navlinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "https://medium.com/@MaikelSalles", label: "Medium", target: "_blank" },
  { href: "https://www.behance.net/maikelsalles", label: "Portfolio", target: "_blank" },
  { href: "/contact", label: "Contact" }
]

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = usePathname();
  const [navActive, setNavActive] = useState(false);
  const [blackout, setNavBlackOut] = useState(false);
  const closeNav = () => {
    setNavActive(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
      setNavActive(false);
      setNavBlackOut(false);
      if (currentPosition > 70) {
        setNavBlackOut(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (    
    <header className={`${styles.header} ${globals.wrapper} ${!navActive ? "" : styles.collapsed} ${!blackout ? "" : styles.blackOut}`}>
      <button id={styles.toggleNav} onClick={() => setNavActive(!navActive)} aria-label="Toggle Menu" className={`nav__menu-bar`}></button>
      <Link href="" title="Home page" className={styles.brand}>
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
      <nav className={`${styles.nav}`}>
        { navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              onClick={closeNav}
              className={link.href === path ? styles.active : ''}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  )
}