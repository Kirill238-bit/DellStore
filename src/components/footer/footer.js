import Image from 'next/image'
import style from './footer.module.scss'

export default function Footer(){
    return(
        <div className={style.wrapper}>
            <div className={style.main}>
                    <div className={style.logo}>
                        <Image
                        src="/images/Dell_Logo.png"
                        alt='logo'
                        width={112}
                        height={112}/>
                    </div>
                    <div className={style.main_info}>
                        <div>
                            <div className={style.title}>Каталог</div>
                            <div className={style.subtitle}>Ноутбуки</div>
                            <div className={style.subtitle}>Персональные компьютеры</div>
                            <div className={style.subtitle}>Серверы</div>
                            <div className={style.subtitle}>Dell EMC</div>
                            <div className={style.subtitle}>Запасные части к Dell EMC</div>
                        </div>
                        <div>
                            <div className={style.title}>Личный кабинет</div>
                            <div className={style.subtitle}>Профиль</div>
                            <div className={style.subtitle}>История заказов</div>
                            <div className={style.subtitle}>SMS-уведомления</div>
                            <div className={style.subtitle}>Избранное</div>
                            <div className={style.subtitle}>Сравнение товаров</div>
                        </div>
                        <div>
                            <div className={style.title}>Помощь</div>
                            <div className={style.subtitle}>Доставка и оплата</div>
                            <div className={style.subtitle}>Контакты</div>
                            <div className={style.subtitle}>FAQ</div>
                            <div className={style.subtitle}>Наш FAQ</div>
                        </div>
                    </div>
            </div>
                <div className={style.main_adress}>
                        <div>
                            <div className={style.title}>Адрес</div>
                            <div className={style.subtitle}>Москва, ул. 3-я Хорошевская, дом 2, строение 1</div>
                        </div>
                        <div>
                            <div className={style.title}>Телефон</div>
                            <div className={style.subtitle}>+7 495 737-06-01, +7 495 737-06-01</div>
                        </div>
                        <div>
                            <div className={style.title}>E-mail</div>
                            <div className={style.subtitle}>dell_ru@gmail.com</div>
                        </div>
                        <div className={style.img}>
                            <Image
                            src='/images/contacts/soc.png'
                            alt='facebook'
                            width={94}
                            height={38}/>
                        </div>
                </div>
            </div>
    )
}