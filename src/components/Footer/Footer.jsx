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
          <form>
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
        </div>
        <div className={classes.secondary}></div>
      </Container>
    </footer>
  )
}

export default Footer
