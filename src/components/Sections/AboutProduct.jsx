import classes from './AboutProduct.module.css'
import Container from '../UI/Container'
import dizalica from '../../assets/dizalica.png'

const AboutProduct = () => {
  return (
    <section className={classes['about-product']}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes['left-side']}>
            <h2>Korporativni klijenti</h2>
            <p>
              Sa ovim mobilnim liftom možete optimizovati svoje radno vreme i
              samim tim ostvariti veći profit i na taj način poboljšati svoju
              konkurentnost. Naši klijenti su radionice za generalne popravke,
              vulkanizere, reklamne kuće (automatske), karoserije i farbanje.
            </p>
            <button>Dugme</button>
          </div>
          <div className={classes['right-side']}>
            <h2>Individualni klijenti</h2>
            <p>
              Iz raznih razloga, sve više privatnika odlučuje se da sami izvrše
              popravke. To su ljudi koji vole da se petljaju sa automobilima,
              koji žele da uštede na popravci, imaju takav hobi, imaju loša
              iskustva sa garažama, oldtajmer dugoročnim projektima. Ne morate
              da tražite od svojih prijatelja da podele radionicu, sami ste sebi
              majstor i radite kada želite.
            </p>
            <button>Dugme</button>
          </div>
        </div>
        <div className={classes['img-wrapper']}>
          <img src={dizalica} alt="" />
          <div>
            <h2>Najbolje dizalice</h2>
            <p>
              Trudimo se da budemo pouzdan partner koji brzo odgovara na vaše
              potrebe. Uvek nudimo savete i pomoć, spremni smo da odgovorimo na
              svako vaše pitanje. Posebnu pažnju posvećujemo bezbednosti i
              zadovoljstvu naših kupaca, zbog čega svaku uslugu obavljamo sa
              najvećom preciznošću i posvećenošću.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProduct
