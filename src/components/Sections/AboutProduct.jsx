import classes from './AboutProduct.module.css'
import Container from '../UI/Container'
import dizalica from '../../assets/dizalica2.png'
import { Link } from 'react-router-dom'

const AboutProduct = () => {
  return (
    <section className={classes['about-product']}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes['left-side']}>
            <h2>Korporativni klijenti</h2>
            <p>
              Vreme je novac, Sa mobilnim dizalicama PM Tools možete
              optimizovati svoje radno vreme i samim tim ostvariti veći profit i
              na taj način poboljšati svoju konkurentnost. Naši klijenti su
              detailing firme, auto servisi, farbarske radnje, limari i
              vulkanizeri, firme za restauraciju automobila kao i za firme koje
              se bave presvlačenjem folija (wrap).
            </p>
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <div className={classes['right-side']}>
            <h2>Individualni klijenti</h2>
            <p>
              Iz raznih razloga, sve više privatnika se odlučuje da sami izvrše
              popravke. To su ljudi koji vole da se bave svojim automobilima,
              koji žele da uštede na popravci, imaju takav hobi, imaju loša
              iskustva sa garažama,dugoročnim projektima oldtajmerima. Više ne
              morate da tražite od svojih prijatelja da delite radionicu, sami
              ste sebi majstor i radite kada i gde želite.
            </p>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div className={classes['img-wrapper']}>
          <img src={dizalica} alt="" />
          <div>
            <h2>Najbolje dizalice</h2>
            <p>
              Trudimo se da budemo pouzdan partner koji brzo odgovara na vaše
              potrebe. Uvek nudimo savete i pomoć, spremni smo da odgovorimo na
              svako vaše pitanje. Posebnu pažnju posvećujemo bezbednosti i
              zadovoljstvu naših kupaca, zbog čega svaku uslugu obavljamo sa
              najvećom preciznošću i posvećenošću.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProduct
