import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './ReferenceSection.module.css'
import Pmtools from '../../assets/pmtoolsWhite.png'

const Reference = () => {
  return (
    <section className={classes.reference}>
      <Container>
        <Breadcrumb />
        <h1>Reference</h1>
        <div className={classes.wrapper}>
          <p>
            1. "Mobilne dizalice su naš pouzdani partner za nabavku dizalica za
            podizanje automobila. Njihova oprema je visokog kvaliteta i pruža
            nam neophodnu snagu i stabilnost pri podizanju tereta."
          </p>
          <p>
            2. "Saradnja sa kompanijom Mobilne dizalice je prevazišla naša
            očekivanja. Njihove dizalice za podizanje automobila su se pokazale
            kao izuzetno efikasne i pouzdane, omogućavajući nam da obavimo čak i
            najzahtevnije zadatke."
          </p>
          <p>
            3. "Hvala kompaniji Mobilne dizalice na vrhunskoj podršci i
            kvalitetnim dizalicama za podizanje automobila. Njihova oprema je
            izuzetno jednostavna za upotrebu, pruža nam fleksibilnost i povećava
            našu produktivnost u servisiranju vozila."
          </p>
          <p>
            4. "Mobilne dizalice su nam omogućile da unapredimo našu operativu
            kroz njihove vrhunske dizalice za podizanje automobila. Njihova
            preciznost i izdržljivost su nam pomogle da efikasno podižemo i
            spuštamo vozila u našem servisnom centru."
          </p>
          <img src={Pmtools} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default Reference
