/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import './globals.scss'
import { Metadata } from 'next'
import './globals.scss'
import Button from '@/app/components/button'
import styles from './home.module.scss'

export const metadata: Metadata = {
export const metadata: Metadata = {
  title: 'Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: 'Hello world! This is my personal website',
  description: 'Hello world! This is my personal website',
}

export default function Home() {
  return (
    <section className={styles.featuredSection}>
      <h1>Maikel Salles</h1>
      <p>
        <strong>UX UI Designer | Front End Developer | Accessibility Specialist</strong>
        Harmonizing design and code for elegant and inclusive experiences,<br/>
        where user needs are the cornerstone.
      </p>
      <Button href="https://www.linkedin.com/in/maikelsalles" customClass="align-md-right" icon="linkedIn" target="_blank" label="Follow me on LinkedIn"/>
      <Button href="https://www.linkedin.com/in/maikelsalles" customClass="align-md-right" icon="linkedIn" target="_blank" label="Follow me on LinkedIn"/>
    </section>
  )
}
