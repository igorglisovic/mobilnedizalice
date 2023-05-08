import Breadcrumb from '../UI/Breadcrumb'
import Container from '../UI/Container'
import classes from './ReferenceSection.module.css'
import Pmtools from '../../assets/pmtoolsWhite.png'

const Reference = () => {
  return (
    <section className={classes.reference}>
      <Container>
        <Breadcrumb />
        <h1>Reference</h1>
        <div className={classes.wrapper}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laudantium ratione accusamus rerum obcaecati, aliquam ipsum quos
            fugiat, maiores cumque dolorem molestias molestiae ipsa esse at
            sequi asperiores corrupti. Quam doloribus modi voluptatem possimus
            voluptatum. Laboriosam eum fuga voluptatem suscipit, molestias ipsum
            quae vel delectus dolorum numquam quisquam dignissimos quaerat
            deserunt quasi sed repellat unde ullam! Possimus quisquam illum
            expedita sapiente quis provident dolorum, aperiam doloremque est
            nulla dignissimos ipsam! Enim dicta a culpa saepe placeat
            repellendus? Consequuntur, quas. Magnam.
          </p>
          <img src={Pmtools} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default Reference
