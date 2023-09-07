import Image from 'next/image'
import style from './catalog.module.scss'


export default function Catalog(){
    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.introduction}>
                    <div>
                        <div className={style.introduction_title}>Каталог товаров от Dell</div> 
                        <div className={style.introduction_subtitle}>Наша компания является зарегистрированным и официальным партнером Dell в России.</div>
                        <div className={style.button_wrapper}>
                            <div className={style.button}>
                                <Image 
                                src='/images/slider/arrow_button.png'
                                alt='arrow'
                                width={12}
                                height={12}/>
                            </div>
                            <div className={style.text}>В каталог</div>
                        </div>
                    </div>
                </div>
                <div className={style.tech}>
                    <div className={style.tech_content}>
                        <div className={style.tech_number}>01</div>
                        <div className={style.tech_img}>
                            <Image
                            src='/images/catalog/lab.png'
                            alt='img'
                            width={415}
                            height={245}/>
                        </div>
                        <div className={style.tech_subtitle}>105 товаров</div>
                        <div className={style.tech_title}>Ноутбуки</div>
                    </div>
                </div>
                <div className={style.tech}>
                    <div className={style.tech_content}>
                        <div className={style.tech_number}>02</div>
                        <div className={style.tech_img}>
                            <Image
                            src='/images/catalog/comp.png'
                            alt='img'
                            width={267}
                            height={245}/>
                        </div>
                        <div className={style.tech_subtitle}>65 товаров</div>
                        <div className={style.tech_title}>Персональные копьютеры</div>
                    </div>
                </div>
                <div className={style.tech}>
                    <div className={style.tech_content}>
                        <div className={style.tech_number}>03</div>
                        <div className={style.tech_img}>
                            <Image
                            src='/images/catalog/serv.png'
                            alt='img'
                            width={337}
                            height={245}/>
                        </div>
                        <div className={style.tech_subtitle}>13 товаров</div>
                        <div className={style.tech_title}>Серверы</div>
                    </div>
                </div>
                <div className={style.tech}>
                    <div className={style.tech_content}>
                        <div className={style.tech_number}>04</div>
                        <div className={style.tech_img}>
                            <Image
                            src='/images/catalog/emc.png'
                            alt='img'
                            width={289}
                            height={245}/>
                        </div>
                        <div className={style.tech_subtitle}>2345 товаров</div>
                        <div className={style.tech_title}>Dell EMC</div>
                    </div>
                </div>
                <div className={style.tech}>
                    <div className={style.tech_content}>
                        <div className={style.tech_number}>05</div>
                        <div className={style.tech_img}>
                            <Image
                            src='/images/catalog/stock.png'
                            alt='img'
                            width={340}
                            height={245}/>
                        </div>
                        <div className={style.tech_subtitle}>195 товаров</div>
                        <div className={style.tech_title}>Запасные части к Dell EMC</div>
                    </div>
                </div>
            </div>
        </div>
    )
}