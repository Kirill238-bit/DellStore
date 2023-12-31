'use client'
import Image from 'next/image'
import { useState } from 'react'
import style from './contacts.module.scss'

export default function Contacts(){
    const [name,setName]=useState();
    const [tele, setTele]=useState();
    const [kom, setKom]=useState();

    function Submit(){
        
        if(name===undefined){
            alert('Заполните имя!')
        }
        if(tele===undefined){
            alert('Заполните телефон!')
        }
        if(kom===undefined){
            alert('Заполните комментарий!')
        }
        else{
            alert('Спасибо за заявку');
        }
    }
    return(
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.contacts}>
                    <div className={style.contacts_info}>
                        <div>
                            <div className={style.contacts_title}>Наши контакты</div>
                            <div className={style.contacts_subtitle}>Вы можете связаться с нашим онлайн консультантом</div>
                        </div>
                        <div className={style.cont}>
                            <Image
                            src='/images/contacts/cont.png'
                            alt='cont'
                            width={413}
                            height={393}/>
                        </div>
                        <div>
                            <Image
                            src='/images/contacts/soc.png'
                            alt='soc'
                            width={94}
                            height={38}/>
                        </div>
                    </div>
                    <div className={style.iphone}>
                        <Image
                        src='/images/contacts/iPhone.png'
                        alt='iPhone'
                        width={250}
                        height={565}/>
                    </div>
                </div>
                <div className={style.bid}>
                    <div className={style.bid_info}>
                        <div>
                            <div className={style.bid_title}>Оставьте заявку</div>
                            <div className={style.bid_subtitle}>Оставьте свой номер, и мы перезвоним Вам.</div>
                        </div>
                        <form>
                            <p>Ваше имя</p>
                            <input className={style.bid_normalinput} type='text' onChange={e=>setName(e.target.value)}/>
                            <p>Номер телефона</p>
                            <input className={style.bid_normalinput} type='text' onChange={e=>setTele(e.target.value)}/>
                            <p>Комментарий</p>
                            <input className={style.bid_input} type='text' onChange={e=>setKom(e.target.value)}/>
                            <br/>
                            <div className={style.button_wrapper}>
                                <div className={style.button} onClick={Submit}>
                                    <Image 
                                    src='/images/slider/arrow_button.png'
                                    alt='arrow'
                                    width={12}
                                    height={12}/>
                                </div>
                                <div className={style.text}>Заказать</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}