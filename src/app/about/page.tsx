/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import styles from './about.module.scss'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Maikel Salles',
  description: 'Read about my career and story.',
}

export default function About() {
  return (
    <article className={styles.article}>
      <div className={styles.textContent}>
        <h1>About me</h1>
        <h2>Nowadays</h2>
        <p>
          My name is Maikel Salles, and I'm a highly skilled front-end developer and web designer with over 10 years of experience in the industry. Currently, I'm Head of Design at DBC Company, consulting for Edenred, where I'm creating accessible and user-friendly designs and building a design system with my team from scratch.
        </p>
        <h2>My personal brand</h2>
        <p>
        I believe that my ability to motivate and push my team forward to achieve our business key results it's a plus! A strong team is essential to success, and I strive to cultivate a collaborative and positive work environment where everyone feels valued and motivated. With strong critical thinking, I'm used to working in agile environments and with multidisciplinary teams, under pressure, with a lot of collaboration!
        </p>
        <h2>Proud of</h2>
        <p>
        As an accessibility specialist, I'm passionate about creating designs that are accessible to everyone, regardless of their abilities. I understand the importance of inclusive design, and I always work hard to ensure that the company's internal communication and its products are accessible to people with disabilities.
        </p>
        <h2>Skilled at the Professional Level</h2>
        <p>
          I'm an expert at creating responsive designs for different devices and screen sizes. My skillset includes a deep understanding of HTML 5, CSS 3, and JavaScript. Additionally, I have extensive experience with modern frameworks like Angular, React, VueJs, NextJs, and WordPress, as well as a variety of design software such as Figma, Sketch, Adobe Photoshop, and Adobe Illustrator.
        </p>
        <p>
          I'm confident that my skills and experience make me an asset to any team, and I'm always looking for new opportunities to learn and grow.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
            src="/img/maikel-salles.jpg"
            width={380}
            height={576}
            alt="A picture of me at my graduation. I'm wearing a navy blue blazer and a dark purple shirt. In the background, there's a light blue panel with some bright lights. I'm smiling, sporting a short beard, and I'm bald."
          />  
      </div>
    </article>
  )
}
