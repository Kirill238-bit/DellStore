import Image from 'next/image'
import style from './advantages.module.scss'

export default function Advantages(){
    return(
        <div className={style.wrapper}>
            <div className={style.image_block}>
                <div className={style.image}>
                    <Image
                    src='/images/slider/2.png'
                    alt='laptop'
                    width={874}
                    height={492}/>
                </div>
                <div className={style.title_block}>
                    <div className={style.title}>Наши преимущества</div>
                    <div className={style.subtitle}>Оптимизация мощностей (расходов, социальных выплат и т.п.) позволили компании на 4,7% понизить цены по сравнению с конкурентами</div>
                    <div className={style.button_wrapper}>
                        <div className={style.button}>                       
                            <Image 
                            src='/images/slider/arrow_button.png'
                            alt='arrow'
                            width={12}
                            height={12}/>
                        </div>
                        <div className={style.text}>Оставить заявку</div>
                    </div>
                </div>
            </div>
            <div className={style.info_block}>
                <div className={style.info_item}>
                    <div className={style.info_item_content}>
                        <div className={style.info_item_images}>
                            <div className={style.icon}>
                                <Image
                                src='/images/advantages/card.png'
                                alt='credit'
                                width={36}
                                height={36}/>
                            </div>
                            <div>
                                <Image
                                src='/images/advantages/vector.png'
                                alt='vector'
                                height={90}
                                width={140}/>
                            </div>
                        </div>
                        <div className={style.info_item_text}>
                            <div className={style.title}>
                                Самые выгодные и низкие цены
                            </div>
                            <div className={style.subtitle}>
                                В наличии широкий ассортимент,
                                а также доступные цены на ноутбуки Dell 
                            </div>
                        </div>
                    </div>    
                </div>
                <div className={style.info_item}>
                    <div className={style.info_item_content}>
                        <div className={style.info_item_images}>
                            <div className={style.icon}>
                                <Image
                                src='/images/advantages/mark.png'
                                alt='credit'
                                width={36}
                                height={36}/>
                            </div>
                            <div>
                                <Image
                                src='/images/advantages/vector.png'
                                alt='vector'
                                height={90}
                                width={140}/>
                            </div>
                        </div>
                        <div className={style.info_item_text}>
                            <div className={style.title}>
                            Авторизованный сервисный центр DELL
                            </div>
                            <div className={style.subtitle}>
                            Сертифицированный сервисный центр по ремонту техники Dell в России и странах СНГ 
                            </div>
                        </div>
                    </div>    
                </div>
                <div className={style.info_item}>
                    <div className={style.info_item_content}>
                        <div className={style.info_item_images}>
                            <div className={style.icon}>
                                <Image
                                src='/images/advantages/people.png'
                                alt='credit'
                                width={36}
                                height={36}/>
                            </div>
                            <div>
                                <Image
                                src='/images/advantages/vector.png'
                                alt='vector'
                                height={90}
                                width={140}/>
                            </div>
                        </div>
                        <div className={style.info_item_text}>
                            <div className={style.title}>
                            Высокий уровень технической экспертизы
                            </div>
                            <div className={style.subtitle}>
                            Мы прошли аттестацию в виде тестирования, где показали высокий уровень знаний
                            </div>
                        </div>
                    </div>    
                </div>
                <div className={style.info_item}>
                    <div className={style.info_item_content}>
                        <div className={style.info_item_images}>
                            <div className={style.icon}>
                                <Image
                                src='/images/advantages/box.png'
                                alt='credit'
                                width={36}
                                height={36}/>
                            </div>
                            <div>
                                <Image
                                src='/images/advantages/vector.png'
                                alt='vector'
                                height={90}
                                width={140}/>
                            </div>
                        </div>
                        <div className={style.info_item_text}>
                            <div className={style.title}>
                            Официальный партнер DELL
                            </div>
                            <div className={style.subtitle}>
                            Официальный поставщик продукции DELL в России и странах СНГ
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}