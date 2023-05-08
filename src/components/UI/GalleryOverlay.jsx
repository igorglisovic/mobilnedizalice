import { SwiperSlide, Swiper } from 'swiper/react'
import classes from './GalleryOverlay.module.css'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import { allImages } from '../../data/galerija'
import { useEffect, useState } from 'react'

const GalleryOverlay = ({ currentPhoto, onClickHandler, setIsOpened }) => {
  const [mediaMatches, setMediaMatches] = useState(false)

  let media = window.matchMedia('(max-width: 650px)')

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

  return (
    <div
      className={`${classes.overlay} overlay`}
      onClick={() => {
        setIsOpened(false)
      }}
    >
      <div
        onClick={e => {
          e.stopPropagation()
        }}
        className={classes.main}
      >
        <img src={currentPhoto.src} alt="" />
      </div>
      <div
        onClick={e => {
          e.stopPropagation()
        }}
        className={classes['other-images']}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={mediaMatches ? 4 : 10}
          navigation
        >
          {allImages.map((photo, i) => (
            <SwiperSlide key={i}>
              <div
                className={classes['secondary-photo']}
                style={{
                  backgroundImage: `url(${photo.src})`,
                  backgroundSize: 'cover',
                  aspectRatio: 1,
                  cursor: 'pointer',
                }}
                onClick={e => {
                  onClickHandler(photo)
                  e.stopPropagation()
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GalleryOverlay
