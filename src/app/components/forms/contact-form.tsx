/* eslint-disable react/no-unescaped-entities */
"use client"
import { useForm, ValidationError } from '@formspree/react';
import styles from "./forms.module.scss"
import Input from "@components/input"
import Button from "@components/button"
import Textarea from "@components/textarea"

export default function ContactForm() {
    const [state, handleSubmit, reset] = useForm("xqkoolek");
    
    function handleClick(): void {
        reset()
    }

    if (state.succeeded) {
        return (
            <div className={styles.feedbackMessage}>
                <h1>Great!</h1>
                <p>
                    Can't wait to hear what you have to say. I'll make sure to get back to you real soon. Have an amazing day!<br/>
                </p>
                <p>
                    Cheers,<br/>
                    Maik
                </p>
                <Button event={handleClick} type="button" label="Back"/>
            </div>
        )
    }
    return (
        <>
            <h1>Contact me</h1>
            <p>
                <b>Wanna get in touch?</b><br/>
                Awesome! Just fill out the quick form below, and I'll get back to you ASAP.
            </p>
            <form onSubmit={handleSubmit}>
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
                <Button type="button" label="Send message" customClass="align-right"/>
            </form>
        </>
    )
}