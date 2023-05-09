import classes from './Products.module.css'
import Container from '../UI/Container'
import BreadCrumb from '../UI/Breadcrumb'
import { groups, products } from '../../data/products'
import { useEffect, useState } from 'react'
import Card from '../UI/Card'

const Products = () => {
  const [productsList, setProductsList] = useState(products)
  const [mediaMatches, setMediaMatches] = useState(false)

  const onClickFilterHandler = e => {
    if (e.target.innerText === 'Obriši filtere') {
      setProductsList(products)
      console.log(e.target.innerText)
      return
    }

    setProductsList(
      products.filter(item => {
        if (item.group === e.target.innerText.slice(2)) {
          return item
        }
      })
    )
  }

  const onChangeFilterHandler = e => {
    if (e.target.value === 'kategorije') return

    setProductsList(
      products.filter(item => {
        if (item.group === e.target.value) {
          return item
        }
      })
    )
  }

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

  return (
    <section className={`${classes.products} products`}>
      <Container>
        <div className={classes.wrapper}>
          {mediaMatches && (
            <div
              style={{
                marginTop: '7rem',
                textAlign: 'center',
                marginInline: 'auto',
              }}
            >
              <BreadCrumb />
              <h1>Proizvodi</h1>
            </div>
          )}
          {mediaMatches ? (
            <>
              <select
                onChange={onChangeFilterHandler}
                defaultValue="kategorije"
                name=""
                id=""
              >
                <option value="kategorije" disabled selected hidden>
                  Kategorije
                </option>
                {groups.map((group, i) => (
                  <option key={i}>{group}</option>
                ))}
              </select>
              {/* <span onClick={e => onClickFilterHandler(e)}>Obriši filtere</span> */}
            </>
          ) : (
            <aside>
              <h3>Kategorije</h3>
              <ul className={classes.categories}>
                {groups.map((group, i) => (
                  <li onClick={e => onClickFilterHandler(e)} key={i}>
                    • {group}
                  </li>
                ))}
                <li onClick={e => onClickFilterHandler(e)}>Obriši filtere</li>
              </ul>
            </aside>
          )}
          <div>
            {mediaMatches || (
              <>
                <BreadCrumb />
                <h1>Proizvodi</h1>
              </>
            )}

            <Card slider={false} list={productsList} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
