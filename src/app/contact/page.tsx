/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import styles from "./contact.module.scss"
import Button from "@components/button"
import ContactForm from '../components/forms/contact-form';

export const metadata: Metadata = {
    title: 'Contact Maikel Salles',
    description: 'We are just a message away!'
}

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <section>
                <ContactForm />
            </section>
            <aside className={styles.aside}>
                <h2>Follow me</h2>
                <Button type="link" href="mailto:maikelsalles@gmail.com" title="Click to send an e-mail" icon="email" label="maikelsalles@gmail.com"/>
                <Button type="link" href="https://www.linkedin.com/in/maikelsalles/" title="Follow me on LinkedIn" target="_blank" icon="linkedIn" label="LinkedIn"/>
                <Button type="link" href="https://www.behance.net/maikelsalles" title="View my portfolio on Behance" target="_blank" icon="behance" label="Behance"/>
                <Button type="link" href="calto:+5551996308777" title="Call me" icon="phone" label="+55 51 99630 8777"/>
            </aside>
        </div>
    )
}