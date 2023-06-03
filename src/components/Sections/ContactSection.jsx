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
            <h2>Javite nam se.</h2>
            <p>
              Treba vam naša pomoć? Izaberite najpovoljniji način da nas
              kontaktirate.
            </p>
            <div>
              <h3>E-mail</h3>
              <p>
                <a
                  className={classes.link}
                  href="mailto:info@mobilnedizalice.com"
                >
                  info@mobilnedizalice.com
                </a>
              </p>
            </div>
            <div>
              <h3>Telefon</h3>
              <p>
                <a className={classes.link} href="tel:+381-323-70-730 ">
                  +381 32 370 730{' '}
                </a>
              </p>
            </div>
            <div className={`${classes.icons} icons`}>
              <a
                href="https://www.instagram.com/mobilnedizalice/"
                target="_blank"
              >
                <svg
                  className={classes.ig}
                  width={40}
                  height={40}
                  xmlns="http://www.w3.org/2000/svg"
                  color="red"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="instagram"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                </svg>
              </a>
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
