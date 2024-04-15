"use client"

import Link from 'next/link'
import Image from 'next/image'

import React, { useEffect, useState } from "react";

import DarkLogo from '@img/maikel-salles-logo-light.svg'
import LightLogo from '@img/maikel-salles-logo-dark.svg'

import { usePathname } from "next/navigation"
import Button from '../button';
import globals from "../../globals.module.scss"
import styles from "./header.module.scss"

const navlinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/portfolio", label: "Portfolio" },
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
      if (currentPosition > 30) {
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
      <button id={styles.toggleNav} onClick={() => setNavActive(!navActive)} aria-label="Toggle Menu" className={`nav__menu-bar ${globals.wrapper}`}></button>
      <Link href="/" title="Home page" className={styles.brand}>
        <picture>
          <source srcSet={DarkLogo.src} media="(prefers-color-scheme: dark)" />
          <Image
            src={LightLogo}
            alt="The Maikel Salles logo. It's the initials MS jointed on a white and curved line with a blue dot in the bottom right corner."
            width={32}
            height={32}
          />
        </picture>
      </Link>
      <nav className={`${styles.nav}`}>
        { navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeNav}
              className={link.href === path ? styles.active : ''}
            >
              {link.label}
            </Link>
          )
        )}
        <Button customClass={['phone_only_flex']} type="link" href="mailto:maikelsalles@gmail.com" title="Click to send an e-mail" icon="envelope" label="maikelsalles@gmail.com"/>
        <Button customClass={['phone_only_flex']} type="link" href="https://www.linkedin.com/in/maikelsalles/" title="Follow me on LinkedIn" target="_blank" icon="linkedIn" label="LinkedIn"/>
        <Button customClass={['phone_only_flex']} type="link" href="https://www.behance.net/maikelsalles" title="View my portfolio on Behance" target="_blank" icon="behance" label="Behance"/>
        <Button customClass={['phone_only_flex']} type="link" href="https://medium.com/@MaikelSalles" title="View my academic articles on Medium" target="_blank" icon="medium" label="Medium"/>
        <Button customClass={['phone_only_flex']} type="link" href="calto:+5551996308777" title="Call me" icon="phone" label="+55 51 99630 8777"/>
      </nav>
    </header>
  )
}