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
              kupili? Sa nama ne morate da brinete. Lift je 100% proizveden u
              Poljskoj, sa akcentom na kvalitet i, pre svega, izdržljivost,
              tačnost zahvaljujući laserskom rezanju.
            </p>
            <a href="tel:123-456-7890">Porucite odmah!</a>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default VideoSection
