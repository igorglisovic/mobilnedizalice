import img1 from '../assets/galerija/galerija1.jpg'
import img2 from '../assets/galerija/galerija2.jpg'
import img3 from '../assets/galerija/galerija3.jpg'
import img4 from '../assets/galerija/galerija4.jpg'
import img5 from '../assets/galerija/galerija5.jpg'
import img6 from '../assets/galerija/galerija6.jpg'
import img7 from '../assets/galerija/galerija7.jpg'
import img8 from '../assets/galerija/galerija8.jpg'
import img9 from '../assets/galerija/galerija9.jpg'

export const mainPhotos = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

export const mainPhotosOnPhone = [...mainPhotos].slice(0, -1)

let secondaryPhotos = []
for (let i = 1; i <= 100; i++) {
  import(`../assets/galerija/galerija${i}.jpg`).then(res => {
    secondaryPhotos.push(res.default)
  })
}

console.log(secondaryPhotos)

export default secondaryPhotos

export const secondaryPhotosOnPhone = [
  ...secondaryPhotos,
  mainPhotos[mainPhotos.length - 1],
]

export const allImages = [...mainPhotos, ...secondaryPhotos]
