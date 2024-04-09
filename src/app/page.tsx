/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import './globals.scss'
import Button from '@/app/components/button'
import styles from './home.module.scss'
import Image from 'next/image'
import frontPage from '@img/maikel-salles.png'

export const metadata: Metadata = {
  title: 'Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: 'Hello world! This is my personal website',
}

export default function Home() {
  return (
    <section className={styles.featuredSection}>
      <h1>Maikel Salles</h1>
      <p>
        <strong>UX UI Designer | Front End Developer | Accessibility Specialist</strong><br/>
        Harmonizing design and code for elegant and inclusive experiences,
        where user needs are the cornerstone.
      </p>
      <div className={styles.links_container}>
        <Button href="https://drive.usercontent.google.com/download?id=10zwQm9Rac1g0ZAhBTol2nya6qRJ4HZo7" icon="download" label="Download Resume"/>
        <Button href="/portfolio" icon="heart" label="Favorite Projects"/>
      </div>
      <picture className={styles.frontPic}>
          <source srcSet={frontPage.src} />
          <Image
            src={frontPage}
            alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
            width={503}
            height={539}
          />
        </picture>
    </section>
  )
}
