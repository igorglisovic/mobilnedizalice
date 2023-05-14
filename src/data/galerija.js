import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpeg'
import product1 from '../assets/product1.jpg'
import product1A from '../assets/product1A.jpg'
import product1B from '../assets/product1B.jpg'
import product1C from '../assets/product1C.jpg'
import product2 from '../assets/product2.jpg'
import product2A from '../assets/product2A.jpeg'
import product2B from '../assets/product2B.jpg'
import product2C from '../assets/product2C.jpg'
import product3 from '../assets/product3.jpg'
import product3A from '../assets/product3A.jpg'
import product3B from '../assets/product3B.jpg'
import product3C from '../assets/product3C.jpg'
import product4 from '../assets/product4.jpg'
import product4A from '../assets/product4A.jpg'
import product4B from '../assets/product4B.jpg'
import product4C from '../assets/product4C.jpg'
import product5 from '../assets/product5.jpg'
import product5A from '../assets/product5A.jpg'
import product5B from '../assets/product5B.jpg'
import product5C from '../assets/product5C.jpg'
import product5D from '../assets/product5D.jpg'
import product6 from '../assets/product6.jpg'
import product6A from '../assets/product6A.jpg'
import product6B from '../assets/product6B.jpg'
import product6C from '../assets/product6C.jpg'
import product7 from '../assets/product7.jpg'
import product7A from '../assets/product7A.jpg'
import product7B from '../assets/product7B.jpg'
import product7C from '../assets/product7C.jpg'
import product8 from '../assets/product8.jpg'
import product8A from '../assets/product8A.jpg'
import product9 from '../assets/product9.jpg'
import product9A from '../assets/product9A.jpg'
import product9B from '../assets/product9B.jpg'
import product10 from '../assets/product10.jpg'
import product10A from '../assets/product10A.jpg'
import product11 from '../assets/product11.jpg'
import product11A from '../assets/product11A.jpg'
import product11B from '../assets/product11B.jpg'

export const mainPhotos = [
  { src: img1 },
  { src: img2 },
  { src: product1 },
  { src: product10 },
  { src: product10A },
  { src: product11A },
  { src: product1C },
  { src: product2A },
  { src: product2B },
]

export const mainPhotosOnPhone = [...mainPhotos].slice(0, -1)

export const secondaryPhotos = [
  { src: product3 },
  { src: product3A },
  { src: product9B },
  { src: product9A },
  { src: product9B },
  { src: product7 },
  { src: product7A },
  { src: product7B },
  { src: product7C },
  { src: product6 },
  { src: product6A },
  { src: product6B },
  { src: product6C },
  { src: img1 },
  { src: img2 },
  { src: img1 },
]

export const secondaryPhotosOnPhone = [
  ...secondaryPhotos,
  mainPhotos[mainPhotos.length - 1],
]

export const allImages = [...mainPhotos, ...secondaryPhotos]
