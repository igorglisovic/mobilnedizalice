import { useRef } from 'react'
import classes from './ContactForm.module.css'
import emailjs from '@emailjs/browser'

const ContactForm = ({ style }) => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <form
      ref={form}
      style={style}
      onSubmit={sendEmail}
      className={classes.form}
    >
      <h2>Kontakt forma</h2>
      <div>
        <label htmlFor="name">Vaše ime</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">Vaš email</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="poruka">Vaša poruka</label>
        <textarea id="poruka" cols="30" rows="10" />
      </div>
      <button type="submit">Pošalji</button>
    </form>
  )
}

export default ContactForm
