import Image from 'next/image'
import style from './navbar.module.scss'

export default function Navbar() {
    return (
        <div className={style.wrapper}>
            <div className={style.menu}>
                <div className={style.menu_img}>
                    <Image 
                    src='/images/dellLogo.png'
                    alt='logo'
                    width={70}
                    height={70}/>
                </div>
                <div className={style.menu_info}>
                    <div>главная</div>
                    <div>каталог</div>
                    <div>новости</div>
                    <div>наши асц</div>
                    <div>контакты</div>
                    <div>
                        <Image
                        src='/images/search.png'
                        alt='search'
                        width={20}
                        height={20}/>
                    </div>
                </div>
            </div>
            
            <div className={style.personal}>
                <div>
                    <Image
                    src='/images/person.png'
                    alt='menu'
                    width={49}
                    height={49}/>
                </div>
                <div>
                    <Image
                    src='/images/stairs.png'
                    alt='menu'
                    width={49}
                    height={49}/>
                </div>
                <div>
                    <Image
                    src='/images/heart.png'
                    alt='menu'
                    width={49}
                    height={49}/>
                </div>
                <div>
                    <Image
                    src='/images/bag.png'
                    alt='menu'
                    width={49}
                    height={49}/>
                </div>
            </div>
        </div>
    )
}