import classes from './Hero.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { slides } from '../../data/slides'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper'
import InstagramIcon from '../../assets/ig-icon.png'
import phoneIcon from '../../assets/phone-icon.png'

import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'

const Hero = () => {
  return (
    <section className={`${classes.hero} hero`}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        speed={800}
        autoplay={{ delay: 4000000 }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img className={classes.img} src={slide.img} alt={slide.title} />
            <div className={classes['carousel-caption']}>
              <p>{slide.title}</p>
              <h1>{slide.subTitle}</h1>
              <button>Pozovite nas</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.icons}>
        <div className={classes['phone-wrapper']}>
          <img src={phoneIcon} alt="" />
          <a href="tel:123-456-7890">+123 456 78 90</a>
        </div>
        <div className={classes['location-wrapper']}>
          <img src={InstagramIcon} alt="" />
          <a href="tel:123-456-7890">@mobilnedizalice</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
