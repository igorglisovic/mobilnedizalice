import classes from './AboutProduct.module.css'
import Container from '../UI/Container'
import dizalica from '../../assets/dizalica.png'

const AboutProduct = () => {
  return (
    <section className={classes['about-product']}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes['left-side']}>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              necessitatibus ex delectus sed labore, laudantium, voluptatum,
              itaque est qui rem impedit! Provident, enim. Dolorum iusto,
              consequatur quo qui asperiores in autem adipisci. Omnis eaque
              nostrum sequi veniam sint a? Impedit, qui sint repellendus quo
              voluptatum nostrum reprehenderit quidem odit. Consequuntur.
            </p>
            <button>Dugme</button>
          </div>
          <div className={classes['right-side']}>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
              expedita. Voluptates corrupti repudiandae quia eum animi quisquam
              natus eos? Distinctio et in ab cumque adipisci reiciendis id
              debitis? Voluptas ratione vitae, unde quae soluta repellat est.
              Enim magnam aliquid ad corrupti ab excepturi quo reiciendis,
              consequatur id molestiae ducimus culpa quia voluptate. Quos cum
              perspiciatis non sapiente recusandae laborum dignissimos?
            </p>
            <button>Dugme</button>
          </div>
        </div>
        <div className={classes['img-wrapper']}>
          <img src={dizalica} alt="" />
          <div>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, natus? Amet odit tempora distinctio atque,
              reiciendis id ex dolorum nulla velit fugiat cupiditate neque nisi
              facere?
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProduct
