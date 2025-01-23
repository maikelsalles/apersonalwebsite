/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import './globals.scss'
import Button from '@/app/components/button'
import styles from './home.module.scss'
import globals from './globals.module.scss'
import Image from 'next/image'
import frontPage from '@img/maikel-salles.png'
import Experience from '@components/resume/experience'
import Spacer from '@components/spacer/spacer'
import Education from '@components/resume/education'
import Stack from '@components/resume/stack'
import AboutComponent from '@components/about/about'

import img1 from "@img/portfolio/Design_System_Engineer.jpg";
import img2 from "@img/portfolio/Head_of_Product_Design.jpg";
import img3 from "@img/portfolio/Medical_Platform.jpg";
import img4 from "@img/portfolio/Personal_Website.jpg";
import Contact from './components/contact/page'

export const metadata: Metadata = {
  title: 'Maikel Salles - UX UI Designer | UI Developer | Accessibility Specialist',
  description: 'Hello world! This is my personal website',
}

export default function Home() {
  return (
    <>
      <section className={`${styles.featuredSection} ${globals.wrapper}`}>
        <h1>Maikel Salles</h1>
        <p>
          <strong>Product Designer | Front End Developer | Accessibility Specialist</strong><br/>
          Harmonizing design and code for elegant and inclusive experiences,
          where user needs are the cornerstone.
        </p>
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
      <section className={`${globals.wrapper} ${globals.sectionPadding} ${globals.twoCollumns} ${globals.coloredGradient}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Portfolio</h2>
          <p>
            Explore my latest projects, where design meets functionality. From crafting intuitive Design Systems to delivering impactful UI, UX, and Product Design solutions, these works highlight my passion for innovation and user-centered design.
          </p>
        </div>
        <div>
          <div className={styles.portfolioList}>
            <div className={styles.portfolioItem}>
              <a href="{{ site.url }}/portfolio/design-system-engineer">
                <h3>Design System Engineer</h3>
                <picture>
                  <source srcSet={img1.src} />
                  <Image
                    src={img1}
                    alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                    width={768}
                    height={420}
                  />
                </picture>
              </a>
            </div>
            <div className={styles.portfolioItem}>
              <a href="{{ site.url }}/portfolio/head-of-product-design">
                <h3>Head of Product Design</h3>
                <picture>
                  <source srcSet={img2.src} />
                  <Image
                    src={img2}
                    alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                    width={768}
                    height={420}
                  />
                </picture>
              </a>
            </div>
            <div className={styles.portfolioItem}>
              <a href="{{ site.url }}/portfolio/ux-ui-medical-platform">
                <h3>UX/UI Medical Platform</h3>
                <picture>
                  <source srcSet={img3.src} />
                  <Image
                    src={img3}
                    alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                    width={768}
                    height={420}
                  />
                </picture>
              </a>
            </div>
            <div className={styles.portfolioItem}>
              <a href="{{ site.url }}/portfolio/personal-website">
                <h3>Personal Website</h3>
                <picture>
                  <source srcSet={img4.src} />
                  <Image
                    src={img4}
                    alt="This is my photograph. I have a bald head, green eyes, and Caucasian ethnicity. I'm wearing a dark purple shirt paired with a navy blue blazer. I`m with a calm expression."
                    width={768}
                    height={420}
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutComponent />
      </section>
      <section className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse magni optio debitis hic mollitia, incidunt quas sit eius dolore quaerat laborum placeat odit! Voluptatem illo ea aspernatur et dolorum.</p>
        </div>
        <div className={globals.sectionPadding}>
          <Experience />
        </div>
      </section>
      <Spacer />
      <section className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Stack</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse magni optio debitis hic mollitia, incidunt quas sit eius dolore quaerat laborum placeat odit! Voluptatem illo ea aspernatur et dolorum.</p>
        </div>
        <div className={globals.sectionPadding}>
          <Stack />
        </div>
      </section>
      <Spacer />
      <section className={`${globals.wrapper} ${globals.twoCollumns} ${globals.sectionPadding}`}>
        <div className={`${globals.stickyIt}`}>
          <h2>Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse magni optio debitis hic mollitia, incidunt quas sit eius dolore quaerat laborum placeat odit! Voluptatem illo ea aspernatur et dolorum.</p>
        </div>
        <div className={globals.sectionPadding}>
          <Education />
        </div>
      </section>
      <Contact />
    </>
  )
}
