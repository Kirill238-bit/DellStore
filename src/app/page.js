import Advantages from '@/components/advantages/advantages'
import Slider from '@/components/slider/slider'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Slider/>
      </div>
      <div>
        <Advantages/>
      </div>    
    </main>
  )
}
