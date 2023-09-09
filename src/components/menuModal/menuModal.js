'use client'
import Image from 'next/image'
import style from './menuModal.module.scss'

export default function MenuModal(){
    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.content_title}>
                    <div>
                        <Image
                        src='/images/person.png'
                        alt='menu'
                        width={49}
                        height={49}/>
                    </div>
                    <div>Мария</div>
                </div>
                <div className={style.content_subtitle}>Личный кабинет</div>
                <div className={style.content_subtitle}>История заказов</div>
                <div className={style.content_subtitle}>Персональные предложения</div>
                <div className={style.content_subtitle}>Выйти</div>
            </div>
        </div>
    )
}