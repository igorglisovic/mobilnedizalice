import {
  mainPhotos,
  secondaryPhotos,
  mainPhotosOnPhone,
} from '../../data/galerija'
import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './GalerijaSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

import 'swiper/css'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import GalleryOverlay from '../UI/GalleryOverlay'

const GalerijaSection = () => {
  const [mediaMatches, setMediaMatches] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState()
  const [isOpened, setIsOpened] = useState(false)

  let media = window.matchMedia('(max-width: 840px)')

  useEffect(() => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }

    window.addEventListener('resize', () => {
      if (media.matches) {
        setMediaMatches(true)
      } else {
        setMediaMatches(false)
      }
    })
  }, [])

  const onClickHandler = photo => {
    setCurrentPhoto(photo)
    setIsOpened(true)
  }

  return (
    <>
      {isOpened &&
        createPortal(
          <GalleryOverlay
            onClickHandler={onClickHandler}
            setIsOpened={setIsOpened}
            currentPhoto={currentPhoto}
          />,
          document.getElementById('overlays')
        )}
      <section className={`${classes.galerija} gallery`}>
        <Container>
          <Breadcrumb />
          <h1>Galerija</h1>
          <div className={classes.grid}>
            {mediaMatches
              ? mainPhotosOnPhone.map((photo, i) => (
                  <div
                    className={classes['grid-item']}
                    key={i}
                    style={{ backgroundImage: `url(${photo.src})` }}
                    onClick={() => onClickHandler(photo)}
                  />
                ))
              : mainPhotos.map((photo, i) => (
                  <div
                    className={classes['grid-item']}
                    key={i}
                    style={{ backgroundImage: `url(${photo.src})` }}
                    onClick={() => onClickHandler(photo)}
                  />
                ))}
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {secondaryPhotos.map((photo, i) => (
              <SwiperSlide key={i}>
                <div
                  className={classes['secondary-photo']}
                  style={{ backgroundImage: `url(${photo.src})` }}
                  onClick={() => onClickHandler(photo)}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  )
}

export default GalerijaSection
