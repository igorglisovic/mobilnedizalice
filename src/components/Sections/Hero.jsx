import logo from '../../assets/logo.png'
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

import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectCoverflow,
          Autoplay,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={'cube'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{ delay: 1000000 }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img className={classes.img} src={slide.img} alt={slide.title} />
            <div className={classes['carousel-caption']}>
              <p>{slide.title}</p>
              <h3>{slide.subTitle}</h3>
              <button>Pozovite nas</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
