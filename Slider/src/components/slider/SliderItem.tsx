import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import styles from './SliderItem.module.css'

interface SliderItem {
  id: number
  image: string
  title: string
}

function Slider() {
  const items: SliderItem[] = [
    {
      id: 1,
      image: img1,
      title: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня'
    },
    {
      id: 2,
      image: img2,
      title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, красное дерево'
    },
    {
      id: 3,
      image: img3,
      title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, орех'
    },
    {
      id: 4,
      image: img4,
      title: 'Набор настольный BESTAR «Hercules» из дерева, 5 предметов, двойной лоток, красное дерево'
    },
    {
      id: 5,
      image: img1,
      title: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня'
    },
    {
      id: 6,
      image: img2,
      title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, красное дерево'
    },
    {
      id: 7,
      image: img3,
      title: 'Набор настольный BESTAR «Charon» из дерева, 7 предметов, двойной лоток, орех'
    },
    {
      id: 8,
      image: img4,
      title: 'Набор настольный BESTAR «Hercules» из дерева, 5 предметов, двойной лоток, красное дерево'
    }
  ]

  return (
    <div className={styles.slider}>
      <div className={styles['slider-container']}>
        <div className={styles['slider-viewport']}>
          {items.map((item) => (
            <a key={item.id} className={styles['slider-item']} href="#">
              <img src={item.image} alt={item.title} />
              <h3 className={styles['slider-title']}>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
