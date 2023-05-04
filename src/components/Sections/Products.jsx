import classes from './Products.module.css'
import Container from '../UI/Container'
import BreadCrumb from '../UI/Breadcrumb'
import { groups, products } from '../../data/products'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext'
import Card from '../UI/Card'

const Products = () => {
  const [productsList, setProductsList] = useState(products)

  const onClickFilterHandler = e => {
    setProductsList(
      products.filter(item => {
        if (item.group === e.target.innerText) {
          return item
        }
      })
    )
  }

  return (
    <section className={classes.products}>
      <Container>
        <div className={classes.wrapper}>
          <aside>
            <h3>Kategorije</h3>
            <ul className={classes.categories}>
              {groups.map((group, i) => (
                <li onClick={e => onClickFilterHandler(e)} key={i}>
                  {group}
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <BreadCrumb />
            <h1>Proizvodi</h1>
            <Card slider={false} list={productsList} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
