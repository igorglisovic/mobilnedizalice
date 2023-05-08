import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
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
import img1 from '../assets/dizalica.png'
import img2 from '../assets/image2.jpeg'

export const groups = ['dizalice', 'pumpe', 'pribor']

export const products = [
  {
    id: 1,
    title: 'PM Lift Extended mobile lift',
    description: [
      'Ovaj proizvod je...',
      'Tehnički podaci: minimalna visina: 100mm maksimalna visina: 1000mm širina: 1070mm dužina: 2600mm maksimalni kapacitet dizanja: 2800KG težina: 270KG',
    ],
    thumb: product1,
    images: [product1, img1, img1, img1],
    group: 'dizalice',
    name: 'pm-lift-extended-mobile-lift',
  },
  {
    id: 2,
    title: 'PM Lift Extended PLUS mobile lift',
    description: [
      'Ovaj proizvod je...',
      'Tehnički podaci: minimalna visina: 100mm maksimalna visina: 1000mm širina: 1150mm dužina: 3100mm maksimalni kapacitet dizanja: 2800KG težina: 310KG',
    ],
    thumb: product2,
    images: [product2, img2, img1, img2],
    group: 'dizalice',
    name: 'pm-lift-extended-plus-mobile-lift',
  },
  {
    id: 3,
    title: 'PM Lift Extended Plus S mobile lift',
    description: [
      'Ovaj proizvod je...',
      'Tehnički podaci: minimalna visina: 100 mm maksimalna visina: 1000 mm širina: 1010 mm dužina: 3100 mm maksimalni kapacitet dizanja: 2800KG težina: 300 kg',
    ],
    thumb: product3,
    images: [product3, img2, img1, img2],
    group: 'dizalice',
    name: 'pm-lift-extended-plus-s-mobile-lift',
  },
  {
    id: 4,
    title: 'PM Lift Extended S mobile lift',
    description: [
      'Ovaj proizvod je...',
      'Tehnički podaci: minimalna visina: 100 mm maksimalna visina: 1000 mm širina: 1010 mm dužina: 2600 mm maksimalni kapacitet dizanja: 2800KG težina: 260 kg',
    ],
    thumb: product4,
    images: [product4, img2, img1, img2],
    group: 'dizalice',
    name: 'pm-lift-extended-s-mobile-lift',
  },
  {
    id: 5,
    title: 'Čelične rampe',
    description: [
      'Ovaj proizvod je...',
      'Podesiva dužina 180cm-212cm širina: 30cm toplo pocinkovani',
    ],
    thumb: product5,
    images: [product5, product5A, product5B, product5C, product5D],
    group: 'pribor',
    name: 'celicne-rampe',
  },
  {
    id: 6,
    title: 'Stalci za točkove',
    description: [
      'Omogućavaju vam pristup šasiji, auspuhu, popravkama karoserije.',
      'visina: 40 ili 60 cm Unutrašnje dimenzije rama: 255mm k 335mm nosivost: 1000 kg toplo pocinkovani',
    ],
    thumb: product6,
    images: [product6, product6A, product6B, product6C],
    group: 'pribor',
    name: 'stalci-za-tockove',
  },
  {
    id: 7,
    title: 'Električna pumpa 12V',
    description: [
      'Ovaj proizvod je...',
      'Stojeća jedinica 12V 1.5KV vreme podizanja: 50 sek',
    ],
    thumb: product7,
    images: [product7, product7A, product7B, product7C],
    group: 'pumpe',
    name: 'elektricna-pumpa-12v',
  },
  {
    id: 8,
    title: 'Električna pumpa 230V',
    description: [
      'Ovaj proizvod je...',
      'Stojeća jedinica 230V 1.5KV vreme podizanja: 50 sek',
    ],
    thumb: product8,
    images: [product8, product8A],
    group: 'pumpe',
    name: 'elektricna-pumpa-230v',
  },
  {
    id: 9,
    title: 'Pneumatska pumpa',
    description: [
      'Ovaj proizvod je...',
      'Kompaktni pneumatsko-hidraulični agregat Preporučeni vazdušni pritisak 6-7 bara. Proizvodi do 400 bara na hidrauličnoj strani Kontrolisano pedalom Vreme podizanja, u zavisnosti od kapaciteta kompresora, 2-4 minuta',
    ],
    thumb: product9,
    images: [product9, product9A, product9B],
    group: 'pumpe',
    name: 'pneumatska-pumpa',
  },
  {
    id: 10,
    title: 'Sistem utovara',
    description: [
      'Omogućava vam da sami utovarite lift na prikolicu ili autobus. Omogućava vam da izvršite usluge kod klijenta. Dodatne hidraulične komponente uključene.',
    ],
    thumb: product10,
    images: [product10, product10A],
    group: 'pribor',
    name: 'sistem-utovara',
  },
  {
    id: 11,
    title: 'Sistem utovara',
    description: [
      'Omogućava vam da manevrišete automobilima bez točkova do stanice za popravku, golim karoserijama do kabine za peskarenje ili farbanje.',
    ],
    thumb: product11,
    images: [product11, product11A, product11B],
    group: 'pribor',
    name: 'mobilni-sistem',
  },
]
