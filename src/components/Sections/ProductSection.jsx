import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './ProductSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pmtools from '../../assets/PmTools.png'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import { useRef, useState } from 'react'
import { products } from '../../data/products'
import Card from '../UI/Card'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import GalleryOverlay from '../UI/GalleryOverlay'
import { createPortal } from 'react-dom'

const ProductSection = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState()
  const params = useParams().productId.slice(1)
  const clickedProduct = products.find(product => product.name === params)
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0)
    }
  }, [swiper, clickedProduct])

  const [mainImage, setMainImage] = useState(clickedProduct.thumb)
  const clickedProductGroup = clickedProduct.group

  useEffect(() => {
    setMainImage(clickedProduct.thumb)
  }, [clickedProduct])

  const relatedProducts = products.filter(
    product =>
      product.group === clickedProductGroup && product !== clickedProduct
  )

  const onClickHandler = (image, i) => {
    setCurrentPhoto(i)
    setMainImage(image)
    setIsOpened(true)
  }

  return (
    <section className={classes.product}>
      {isOpened &&
        createPortal(
          <GalleryOverlay
            onClickHandler={onClickHandler}
            setIsOpened={setIsOpened}
            currentPhoto={currentPhoto}
            images={clickedProduct.images}
          />,
          document.getElementById('overlays')
        )}
      <Container>
        <Breadcrumb />
        <div className={classes.wrapper}>
          <div className={classes['images']}>
            <div className={classes['main-image']}>
              <img
                onClick={() =>
                  onClickHandler('', clickedProduct.images[0].indexOf())
                }
                src={clickedProduct.images[0]}
                alt=""
              />
            </div>
            <div className={classes['other-images']}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                onSwiper={setSwiper}
              >
                {clickedProduct.images.map((photo, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={classes['secondary-photo']}
                      style={{ backgroundImage: `url(${photo})` }}
                      onClick={() => onClickHandler(photo, i)}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={classes.content}>
            <h1>{clickedProduct.title}</h1>
            <img className={classes['pm-tools']} src={Pmtools} />
            <div className={classes.description}>
              <h2>Opis proizvoda</h2>
              {clickedProduct.description && (
                <p>{clickedProduct.description}</p>
              )}
              {clickedProduct.technical_description && (
                <div className={classes['technical-description']}>
                  <p>Tehnički podaci:</p>
                  {clickedProduct.technical_description.map((el, i) => (
                    <p key={i}>- {el}</p>
                  ))}
                </div>
              )}
            </div>
            <a href="tel:+38132370730">Poruči</a>
          </div>
        </div>
        <div className={classes['related-products']}>
          <h2>Slični proizvodi</h2>
          <Card slider={true} list={relatedProducts} />
        </div>
      </Container>
    </section>
  )
}

export default ProductSection
