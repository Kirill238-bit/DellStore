'use client'
import style from './burger.module.scss'

export default function Burger({active}){
    return(
        <div className={`${style.menu} ${active ? style.menu_active : ''}`}>
            <div className={style.blur}>
                <div className={style.menu_content}>
                        <div>Главная</div>
                        <div>Каталог</div>
                        <div>Новости</div>
                        <div>Наш АСЦ</div>
                        <div>Контакты</div>
                </div>
            </div>
        </div>
    )
}