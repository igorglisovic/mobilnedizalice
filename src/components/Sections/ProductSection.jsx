import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './ProductSection.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pmtools from '../../assets/PmTools.png'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'
import { useState } from 'react'
import { products } from '../../data/products'
import Card from '../UI/Card'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ProductSection = () => {
  const params = useParams().productId.slice(1)
  const clickedProduct = products.find(product => product.name === params)

  const [mainImage, setMainImage] = useState(clickedProduct.thumb)
  const clickedProductGroup = clickedProduct.group

  useEffect(() => {
    setMainImage(clickedProduct.thumb)
  }, [clickedProduct])

  const relatedProducts = products.filter(
    product =>
      product.group === clickedProductGroup && product !== clickedProduct
  )

  const onClickHandler = image => {
    setMainImage(image)
  }

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
            <img className={classes['pm-tools']} src={Pmtools} />
            <div className={classes.description}>
              <h2>Opis proizvoda</h2>
              {clickedProduct.description.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <button>Poruči</button>
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
