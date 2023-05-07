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
        >
          <p>Your browser does not recognize video element.</p>
        </video>
        <Container>
          <div className={classes.content}>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum, quam. Minima, illum facere, recusandae officiis.
            </p>
            <button>Pozovite</button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default VideoSection
