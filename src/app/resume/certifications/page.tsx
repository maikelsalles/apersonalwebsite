import { Metadata } from "next"
import styles from "../resume.module.scss"
import ResumeSidebar from "@components/resume/sidebar"
import CertificationsComponent from "@components/resume/certifications"

export const metadata: Metadata = {
    title: "Certifications - Resume - Maikel Salles",
    description: "Read about my previous experience."
}

export default function Certifications() {

    return (
        <article className={styles.resumeContainer}>
            <ResumeSidebar />
            <section className={styles.textContent}>
                <CertificationsComponent />
            </section>
        </article>
    )
}