import { allImages, mainPhotos, mainPhotosOnPhone } from '../../data/galerija'
import secondaryPhotos from '../../data/galerija'
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

  const onClickHandler = (photo, i) => {
    setCurrentPhoto(i)
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
            images={allImages}
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
                    style={{ backgroundImage: `url(${photo})` }}
                    onClick={() => onClickHandler(photo, i)}
                  />
                ))
              : mainPhotos.map((photo, i) => (
                  <div
                    className={classes['grid-item']}
                    key={i}
                    style={{ backgroundImage: `url(${photo})` }}
                    onClick={() => onClickHandler(photo, i)}
                  />
                ))}
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
          >
            {secondaryPhotos.map((photo, i) => (
              <SwiperSlide key={i}>
                <div
                  className={classes['secondary-photo']}
                  style={{ backgroundImage: `url(${photo})` }}
                  onClick={() => onClickHandler(photo, 9 + i)}
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
