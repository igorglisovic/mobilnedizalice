import ContactForm from '../UI/ContactForm'
import Container from '../UI/Container'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={classes.main}>
          <div className={classes['main-left']}>
            <div>
              <h2>Javite nam se.</h2>
              <p>
                Treba vam naša pomoć? Izaberite najpovoljniji način da nas
                kontaktirate.
              </p>
            </div>
            <div>
              <h3>E-Mail</h3>
              <a href="mailto:info@mobilnedizalice.com">
                info@mobilnedizalice.com
              </a>
            </div>
            <div>
              <h3>Telefon</h3>
              <a href="tel:+38132370730">+381 32 370 730 </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
      <div className={classes.secondary}>
        <Container>
          <div className={classes['secondary-wrapper']}>
            <p>© 2022 MobilneDizalice © Sva prava zadržana.</p>
            <p>
              Developed by{' '}
              <a href="https://igorglisovic.com/" target="_blank">
                Igor
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
