"use client"
import { Metadata } from 'next';
import styles from "./contact.module.scss"
import Input from "@components/input"
import Button from "@components/button"
import Textarea from "../components/textarea"
import { useForm, ValidationError } from '@formspree/react';

export const metadata: Metadata = {
    title: 'Contact Maikel Salles',
    description: 'We are just a message away!',
}

export default function Contact() {
    const [state, handleSubmit] = useForm("xqkoolek");
    
    return (
        <div className={styles.contactContainer}>
            <section>
                <h1>Contact me</h1>
                <p>We&apos;re just a chat of distance!</p>
                <form action="" onSubmit={handleSubmit}>
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                    <Input name="name" type="text" label="Name" size={1} required/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <Input name="email" type="email" label="Email" size={2} required/>
                    <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                    />
                    <Input name="phone" type="phone" label="Phone" size={2}/>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <Textarea name="message" label="Whats up?" size={1} required/>
                    <div className={styles.buttomContainer}>
                        {state.succeeded? <span className="styles.feedbackMessage">Thanks for joining!</span> : ''}
                        <Button disabled={state.submitting} type="submit" label="Submit" customClass="align-right"/>
                    </div>
                </form>
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