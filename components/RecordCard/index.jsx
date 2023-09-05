"use client"
import { useState } from 'react'
import s from './RecordCard.module.css'
import { removeCardLesson } from '@/app/helpers/api/fetch.api'


export default function RecordCard({ cardData, index }) {
    const [isActive, setIsActive] = useState('')
    const [isRemovable, setIsRemovable] = useState(false)
    const actionDeleteCard = async (id) => {
        const res = await removeCardLesson(id)
        setIsRemovable(true)
    }
    return (
        <li className={isRemovable ? `${s.recordCard} ${s.removable}` : `${s.recordCard}`}>
            <button
                onClick={() => setIsActive(!isActive)}
                className={!isActive ? s.actionsWrap : `${s.actionsWrap} ${s.active}`}
            >
                <span className={isActive ? `${s.action__close} ${s.active}` : `${s.action__close}`}></span>
                <span className={`${s.actions}`}>
                    <button
                        onClick={() => {
                            actionDeleteCard(cardData.id)
                        }}
                        className={`${s.actions__delete}`}
                    >Удалить</button>
                    <button
                        onClick={() => console.log('Изменить')}
                        className={`${s.actions__edit}`}
                    >Изменить</button>
                </span>
            </button>
            <span className={`${s.recordCard__info} ${s.idx}`} >{index}</span>
            <p className={`${s.date} ${s.recordCard__info}`}>
                <span>Дата: </span>
                {cardData.dateLesson}
            </p>
            <p className={`${s.time} ${s.recordCard__info}`}>
                <span>Время: </span>
                {cardData.timeLesson}
            </p>
            <p className={`${s.instructorName} ${s.recordCard__info}`}>
                <span>Инструктор: </span>
                {cardData.instructorName}
            </p>
        </li>
    )
}
