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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
                dignissimos! Dolor autem earum voluptatibus blanditiis
                distinctio corporis quidem eos porro?
              </p>
            </div>
            <div>
              <h3>Mail</h3>
              <span>email@email.com</span>
            </div>
            <div>
              <h3>Phone</h3>
              <span>+123 456 78 90</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
      <div className={classes.secondary}>
        <Container>
          <p>© 2022 MobilneDizalice © Sva prava zadržana.</p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
