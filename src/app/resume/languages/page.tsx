import { Metadata } from "next"
import styles from "../resume.module.scss"
import ResumeSidebar from "@components/resume/sidebar"
import LanguagesComponent from "@components/resume/languages"

export const metadata: Metadata = {
    title: "Certifications - Resume - Maikel Salles",
    description: "Read about my previous experience."
}

export default function Languages() {

    return (
        <article className={styles.resumeContainer}>
            <ResumeSidebar/>
            <section className={styles.textContent}>
                <LanguagesComponent />
            </section>
        </article>
    )
}