import classes from './ONamaSection.module.css'
import Container from '../UI/Container'
import Breadcrumb from '../UI/Breadcrumb'

const ONamaSection = () => {
  return (
    <section className={classes['o-nama']}>
      <Container>
        <Breadcrumb />
        <h1>O nama</h1>
      </Container>
      <div className={classes['img-wrapper']}></div>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          odio? Excepturi facere tempora ut a velit provident natus aspernatur
          amet, repellendus at earum autem blanditiis voluptates alias nemo
          tempore quos ipsam? Nemo dolorem a fuga laudantium saepe cupiditate,
          voluptatibus atque officia beatae, possimus iste illo aspernatur
          itaque officiis iusto rerum placeat error laborum est soluta
          recusandae, quasi explicabo ab quam? Iure fuga odit expedita nam porro
          ipsum quisquam libero autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cum
          dignissimos! Corrupti vero aut repudiandae, minima nulla soluta quis
          similique blanditiis obcaecati, architecto earum! Nemo praesentium
          amet itaque, optio, dolorum nostrum, doloremque velit autem animi
          minima quos iure et ratione odio quidem. Itaque laudantium iusto, iste
          esse voluptatem omnis illum adipisci quasi harum. Error fugiat quis a
          iste excepturi officiis.
        </p>
        <div className="icons">
          <a href="https://www.instagram.com/mobilnedizalice/" target="_blank">
            <svg
              className="ig"
              width={40}
              height={40}
              xmlns="http://www.w3.org/2000/svg"
              color="red"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="instagram"
            >
              <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/mobilnedizalice/" target="_blank">
            <svg
              className="fb"
              width={35}
              height={35}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Ebene 1"
              viewBox="0 0 1024 1024"
              id="facebook-logo-2019"
            >
              <path
                fill="#1877f2"
                d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
              ></path>
              <path
                fill="#fff"
                d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
              ></path>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default ONamaSection
