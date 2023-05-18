/* eslint-disable react/no-unescaped-entities */
import Button from '@/app/components/button'
import './globals.scss'
import styles from './home.module.scss'

export const metadata = {
  title: 'Maikel Salles - UX UI Designer | Front End Developer | Accessibility Specialist',
  description: 'Personal website',
}

export default function Home() {
  return (
    <section className={styles.featuredSection}>
      <h1>UX UI Designer | Front End Developer<br/> Accessibility Specialist</h1>
      <p>
          Hello!<br/>
          I'm Maikel Salles, a Brazilian UI Front End Developer and UX Designer with 10+ years of experience, passionate about creating accessible user experiences while utilizing cutting-edge technologies. Proficient in building responsive designs using HTML5, CSS3, JavaScript, modern TypeScript frameworks, and many design tools. Strong critical thinking and self-motivated leader, familiar with agile environments and collaborating with multidisciplinary teams under pressure.
      </p>
      <Button href="https://www.linkedin.com/in/maikelsalles" customClass="align-md-right">Follow me on LinkedIn</Button>
    </section>
  )
}
