"use client"

import styles from "./sidebar.module.scss"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Button from "../button"

const sidebarlinks = [
    { href: "/resume", label: "Skills" },
    { href: "/resume/experience", label: "Experience" },
    { href: "/resume/education", label: "Education" },
    { href: "/resume/certifications", label: "Certifications" },
    { href: "/resume/languages", label: "Languages" }
]

export default function ResumeSidebar() {
    const path = usePathname();
    return (
        <div className={styles.sidebar}>
            <h1>Resume</h1>
            <ul>
                { sidebarlinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={link.href === path ? styles.active : ''}
                        >
                            {link.label}
                        </Link>
                    </li>
                    )
                )}
            </ul>
        </div>
    )
}