import { SwiperSlide, Swiper } from 'swiper/react'
import classes from './GalleryOverlay.module.css'
import { Navigation, Thumbs } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import { allImages } from '../../data/galerija'
import { useEffect, useState } from 'react'

const GalleryOverlay = ({ currentPhoto, onClickHandler, setIsOpened }) => {
  const [mediaMatches, setMediaMatches] = useState(false)
  const [activeThumb, setActiveThumb] = useState()

  console.log(currentPhoto)

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
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className="product-images-slider"
          initialSlide={currentPhoto}
        >
          {allImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={classes['secondary-photo']}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  aspectRatio: '16/9',
                  cursor: 'pointer',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          spaceBetween={10}
          slidesPerView={mediaMatches ? 4 : 10}
          modules={[Navigation, Thumbs]}
          className="product-images-slider-thumbs"
          navigation
        >
          {allImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={classes['secondary-photo']}
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: 'cover',
                  aspectRatio: 1,
                  cursor: 'pointer',
                }}
                onClick={e => {
                  onClickHandler(item)
                  e.stopPropagation()
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GalleryOverlay
