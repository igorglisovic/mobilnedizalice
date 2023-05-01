import { mainPhotos, secondaryPhotos } from '../../data/galerija'
import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './GalerijaSection.module.css'

const GalerijaSection = () => {
  return (
    <section className={classes.galerija}>
      <Container>
        <Breadcrumb />
        <h1>Galerija</h1>
        <div className={classes.grid}>
          {mainPhotos.map((photo, i) => (
            <div
              className={classes['grid-item']}
              key={i}
              style={{ backgroundImage: `url(${photo.src})` }}
            />
          ))}
        </div>
        <div className={classes['secondary-photos']}>
          {secondaryPhotos.map((photo, i) => (
            <div style={{ backgroundImage: `url(${photo.src})` }} key={i}></div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default GalerijaSection

// {
//   galerija.map((photo, i) => (
//     <img
//       className={`${classes['grid-item']} ${classes[`item${i + 1}`]}}`}
//       key={i}
//       src={photo}
//     />
//   ))
// }
