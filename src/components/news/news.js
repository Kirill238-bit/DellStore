import Image from 'next/image'
import style from './news.module.scss'

export default function News(){
    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.contnet_title}>
                    <div className={style.title_first}>
                        <div className={style.title_first_main}>Последние новости</div>
                        <div className={style.button_wrapper}>
                            <div className={style.text}>Все новости</div> 
                            <div className={style.button}>
                                <Image 
                                src='/images/slider/arrow_button.png'
                                alt='arrow'
                                width={12}
                                height={12}/>   
                            </div>
                        </div>
                    </div>
                    <div className={style.title_two}>
                        <div>Вы можете посмотреть ещё больше интересных новостей и узнать о последних новинках, перейдя по кнопке</div>
                    </div>
                </div>
                <div className={style.content_news}>
                    <div className={style.item}>
                        <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                    <div className={style.item}>
                    <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                    <div className={style.item}>
                    <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                    <div className={style.item}>
                    <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                    <div className={style.item}>
                    <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                    <div className={style.item}>
                    <Image
                        src='/images/news/1.2.png'
                        alt='item'
                        width={440}
                        height={364}/>
                    </div>
                </div>
            </div>
        </div>
    )
}