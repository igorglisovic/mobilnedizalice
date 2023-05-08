import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpeg'

export const mainPhotos = [
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
]

export const mainPhotosOnPhone = [...mainPhotos].slice(0, -1)

export const secondaryPhotos = [
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
]

export const secondaryPhotosOnPhone = [
  ...secondaryPhotos,
  mainPhotos[mainPhotos.length - 1],
]

export const allImages = [...mainPhotos, ...secondaryPhotos]
