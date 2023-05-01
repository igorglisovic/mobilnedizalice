import classes from './ContactForm.module.css'

const ContactForm = ({ style }) => {
  return (
    <form style={style} className={classes.form}>
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
