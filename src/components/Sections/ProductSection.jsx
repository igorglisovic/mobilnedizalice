import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './ProductSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pmtools from '../../assets/PmToolsWhite.png'

import { Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

import 'swiper/css'

import { useProductContext } from '../../context/ProductContext'
import { useEffect, useState } from 'react'
import { products } from '../../data/products'
import Card from '../UI/Card'
import { useLocation, useParams } from 'react-router-dom'

const ProductSection = () => {
  const params = useParams().productId.slice(1)
  const clickedProduct = products.find(product => product.name === params)

  const [mainImage, setMainImage] = useState(clickedProduct.images[0])
  const clickedProductGroup = clickedProduct.group

  const relatedProducts = products.filter(
    product =>
      product.group === clickedProductGroup && product !== clickedProduct
  )

  console.log(relatedProducts)

  const onClickHandler = image => {
    setMainImage(image)
  }

  useEffect(() => {
    console.log(clickedProduct)
  }, [clickedProduct])

  return (
    <section className={classes.product}>
      <Container>
        <Breadcrumb />
        <div className={classes.wrapper}>
          <div className={classes['images']}>
            <div className={classes['main-image']}>
              <img src={mainImage} alt="" />
            </div>
            <div className={classes['other-images']}>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
              >
                {clickedProduct.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      onClick={() => onClickHandler(image)}
                      className={classes['other-image']}
                      src={image}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={classes.content}>
            <h1>{clickedProduct.title}</h1>
            <div className={classes.description}>
              <h2>Opis proizvoda</h2>
              {clickedProduct.description.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
              <p>
                Brend: <img className={classes['pm-tools']} src={Pmtools} />
              </p>
            </div>
            <button>Poruci</button>
          </div>
        </div>
        <div className={classes['related-products']}>
          <h2>Slicni proizvodi</h2>
          <Card slider={true} list={relatedProducts} />
        </div>
      </Container>
    </section>
  )
}

export default ProductSection
