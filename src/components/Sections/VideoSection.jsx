import Container from '../UI/Container'
import classes from './VideoSection.module.css'
import video from '../../assets/video.mp4'
import { useEffect, useRef } from 'react'

const VideoSection = () => {
  const videoRef = useRef()

  useEffect(() => {
    videoRef.current.playbackRate = 4
  }, [])

  return (
    <section className={classes['video-section']}>
      <div className={classes.wrapper}>
        <video
          style={{
            boxShadow: 'inset 50px 0 white',
          }}
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
        >
          <p>Your browser does not recognize video element.</p>
        </video>
        <Container>
          <div className={classes.content}>
            <h2>Fokusiramo se na kvalitet</h2>
            <p>
              Koliko puta ste kupili nešto jeftino, a zatim drugi put pravilno
              kupili? Sa PM Tools dobijate profesionalni alat u ruke i ne morate
              da brinete. PM Tools mobilne dizalice su 100% proizvedene u
              Poljskoj, sa naglaskom na kvalitetu pre svega, izdržljivosti,
              preciznošću zahvaljujući preciznim laserskim sečenjem.
            </p>
            <a href="tel:+38132370730">Poručite odmah!</a>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default VideoSection
