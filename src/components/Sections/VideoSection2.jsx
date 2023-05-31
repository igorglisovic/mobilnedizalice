import classes from './VideoSection2.module.css'
import Container from '../UI/Container'
import video2 from '../../assets/video2.mp4'
import arrow from '../../assets/arrow.png'
import thumbnail from '../../assets/thumbnail2.jpg'

const VideoSection2 = () => {
  return (
    <section className={classes['video-section']}>
      <Container>
        <div className={classes['video-wrapper']}>
          <video
            className={classes.video}
            controls
            src={video2}
            poster={thumbnail}
          >
            <p>Your browser does not recognize video element.</p>
          </video>
          <div></div>
        </div>
      </Container>
    </section>
  )
}

export default VideoSection2
