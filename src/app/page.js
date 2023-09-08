import Advantages from '@/components/advantages/advantages'
import Catalog from '@/components/catalog/catalog'
import Contacts from '@/components/contacts/contacts'
import News from '@/components/news/news'
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
        <Catalog/>
      </div>
      <div>
        <Advantages/>
      </div>
      <div>
        <News/>
      </div>
      <div>
        <Contacts/>
      </div>    
    </main>
  )
}
