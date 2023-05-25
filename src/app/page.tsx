/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import './globals.scss'
import Button from '@/app/components/button'
import styles from './home.module.scss'

export const metadata: Metadata = {
  title: 'Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: 'Hello world! This is my personal website',
}

export default function Home() {
  return (
    <section className={styles.featuredSection}>
      <h1>UX UI Designer | Front End Developer<br/> Accessibility Specialist</h1>
      <p>
          Hello!<br/>
          I'm Maikel Salles, a Brazilian UI Front End Developer and UX Designer with 10+ years of experience, passionate about creating accessible user experiences while utilizing cutting-edge technologies. Proficient in building responsive designs using HTML5, CSS3, JavaScript, modern TypeScript frameworks, and many design tools. Strong critical thinking and self-motivated leader, familiar with agile environments and collaborating with multidisciplinary teams under pressure.
      </p>
      <Button href="https://www.linkedin.com/in/maikelsalles" customClass="align-md-right" icon="linkedIn" target="_blank" label="Follow me on LinkedIn"/>
    </section>
  )
}
