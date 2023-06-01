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
import { Link } from 'react-router-dom'

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
        autoplay={{ delay: 4000 }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className={classes.img}
              style={{ backgroundImage: `url(${slide.img})` }}
            ></div>
            <div className={classes['carousel-caption']}>
              <p>{slide.title}</p>
              <h1>{slide.subTitle}</h1>
              <Link className="button" to="/proizvodi">
                Naši proizvodi
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.icons}>
        <div className={classes['phone-wrapper']}>
          <img src={phoneIcon} alt="" />
          <a href="tel:+38132370730">+381 32 370 730 </a>
        </div>
        <div className={classes['location-wrapper']}>
          <img src={InstagramIcon} alt="" />
          <a href="https://www.instagram.com/mobilnedizalice/" target="_blank">
            @mobilnedizalice
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
