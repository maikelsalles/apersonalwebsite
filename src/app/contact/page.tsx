import { Metadata } from 'next';
import styles from "./contact.module.scss"
import Input from "@components/input"
import Button from "@components/button"
import Textarea from "../components/textarea"

export const metadata: Metadata = {
    title: 'Contact Maikel Salles',
    description: 'We are just a message away!',
}

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <section>
                <h1>Contact me</h1>
                <p>We&apos;re just a chat of distance!</p>
                <form action="">
                    <Input type="text" label="Name" size={1}/>
                    <Input type="email" label="Email" size={2}/>
                    <Input type="phone" label="Phone" size={2}/>
                    <Textarea label="Whats up?" size={1}/>
                    <Button type="submit" label="Submit" customClass="align-right"/>
                </form>
            </section>
            <aside className={styles.aside}>
                <h2>Follow me</h2>
                <Button type="link" href="https://www.linkedin.com/in/maikelsalles/" title="Follow me on LinkedIn" target="_blank" icon="linkedIn" label="LinkedIn"/>
                <Button type="link" href="https://www.behance.net/maikelsalles" title="View my portfolio on Behance" target="_blank" label="Behance"/>
            </aside>
        </div>
    )
}