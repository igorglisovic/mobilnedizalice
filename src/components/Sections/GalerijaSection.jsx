import { mainPhotos, secondaryPhotos } from '../../data/galerija'
import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './GalerijaSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

import 'swiper/css'

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
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={8}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {secondaryPhotos.map((photo, i) => (
            <SwiperSlide key={i}>
              <div
                className={classes['secondary-photo']}
                style={{ backgroundImage: `url(${photo.src})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
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
