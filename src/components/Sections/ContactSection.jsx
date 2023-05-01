import Breadcrumb from '../UI/Breadcrumb'
import ContactForm from '../UI/ContactForm'
import Container from '../UI/Container'
import classes from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <section className={classes.contact}>
      <Container>
        <Breadcrumb />
        <div className={classes.wrapper}>
          <div className={classes['contact-info']}>
            <h1>Javite nam se.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate tempora dicta facere assumenda autem molestias officia
              cupiditate reiciendis dolor culpa?
            </p>
            <div>
              <span>E-mail</span>
              <p>
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
            <div>
              <span>Telefon</span>
              <p>
                <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>
              </p>
            </div>
          </div>
          <ContactForm
            style={{
              background:
                'linear-gradient(158.58deg, #FF5E14 48.27%, #FF9314 125.17%)',
            }}
          />
        </div>
      </Container>
      <div className={classes.secondary}>
        <Container>
          <p>© 2022 MobilneDizalice © Sva prava zadržana.</p>
        </Container>
      </div>
    </section>
  )
}

export default ContactSection
