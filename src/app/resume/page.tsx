import { Metadata } from "next"
import styles from "./resume.module.scss"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function resume() {
    return (
        <article className={styles.resumeContainer}>
            <div className={styles.sidebar}>
                <h1>Resume</h1>
                <ul>
                    <li>
                        <Link href="/resume/experience">experience</Link>
                    </li>
                    <li>
                        <Link href="/resume/skills">skills</Link>
                    </li>
                    <li>
                        <Link href="/resume/education">Education</Link>
                    </li>
                </ul>
            </div>
            <section className={styles.textContent}>
                <h2>Category</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, rem? Ratione dolorum numquam excepturi inventore ipsum nobis, sequi qui, error, harum aliquid animi. Possimus unde incidunt harum deleniti quis eos.</p>
            </section>
        </article>
    )
}