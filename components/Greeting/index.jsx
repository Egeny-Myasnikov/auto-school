"use client"
import s from './Greeting.module.css'
import { Context } from '@/app/Context'
import { useContext } from 'react'


export const Greeting = () => {
    const [name, setName] = useContext(Context)

    const date = new Date();
    const formateTime = (time) => time <= 9 ? `0${time}` : time
    const time = {
        hour: formateTime(date.getHours()),
        minutes: formateTime(date.getMinutes()),
        seconds: formateTime(date.getSeconds())
    }
    return (

        <h2>
            {(time.hour > 0 && time.hour < 6) ? 'Доброй ночи ' : (time.hour > 6 && time.hour < 12) ? 'Доброе утро' : (time.hour > 12 && time.hour < 18) ? 'Добрый день ' : 'Добрый вечер '
            }  <span>{name}</span>

        </h2>
    )
}
