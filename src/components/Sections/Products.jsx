import classes from './Products.module.css'
import Container from '../UI/Container'
import BreadCrumb from '../UI/Breadcrumb'
import { groups, products } from '../../data/products'
import Pmtools from '../../assets/pmtools.png'
import { useEffect, useState } from 'react'

const Products = () => {
  const [productsList, setProductsList] = useState(products)
  const OnClickHandler = () => {}

  const onClickFilterHandler = (e) => {
    setProductsList(
      products.filter((item) => {
        if (item.group === e.target.innerText) {
          console.log(item)
          return item
        }
      })
    )
  }

  useEffect(() => {
    console.log(productsList)
  }, [productsList])

  return (
    <section className={classes.products}>
      <Container>
        <div className={classes.wrapper}>
          <aside>
            <h3>Kategorije</h3>
            <ul className={classes.categories}>
              {groups.map((group, i) => (
                <li onClick={(e) => onClickFilterHandler(e)} key={i}>
                  {group}
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <BreadCrumb />
            <h1>Proizvodi</h1>
            <div className={classes['products-wrapper']}>
              {productsList.map((product) => {
                return (
                  <div className={classes.product} key={product.id}>
                    <div
                      className={classes['img-wrapper']}
                      style={{ backgroundImage: `url(${product?.thumb})` }}
                    ></div>
                    <div className={classes.content}>
                      <h3>{product.title}</h3>
                      <img src={Pmtools} alt="" />
                      <button onClick={OnClickHandler}>Saznaj više</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
