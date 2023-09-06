'use client'
import { SliderIMages } from '@/data/consts';
import Image from 'next/image';
import { useState } from 'react'
import style from './slider.module.scss'

export default function Slider(){
    const [position,setPosition]=useState(0);

    const setPrev=()=>{
        if (position > 0) setPosition(position-1);
        if(position===0) setPosition(0);
    }
    const setNext=()=>{   
        if (position >= 0) setPosition(position+1);
        if(position===4) setPosition(position+0);
    }
    return(
        <div className={style.wrapper}>
                 <div className={style.button_prev} onClick={setPrev}>
                    <div>←</div>
                </div>
            <div className={style.wrapper_info}>
                <div className={style.wrapper_info_title}>Новое поступление</div>
                <div className={style.wrapper_info_subtitle}>Лучшие товары от компании Dell</div>
                <div className={style.button_wrapper}>
                    <div className={style.button}>
                        <Image 
                        src='/images/slider/arrow_button.png'
                        alt='arrow'
                        width={12}
                        height={12}/>
                    </div>
                    <div className={style.text}>Подробнее</div>
                </div>
            </div>
            <div className={style.wrapper_slider}>
                {SliderIMages.map((item,index)=>(
                <div style={{ transform: `translateX(-${(position*100)}%)`}} key={index}>
                    <Image
                    src={item.img}
                    alt='item'
                    width={557}
                    height={555}/>
                </div>
                ))}
            </div>
            <div className={style.button_next} onClick={setNext}>
                <div>→</div>
            </div>
        </div>
    )
}