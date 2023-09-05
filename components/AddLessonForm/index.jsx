'use client'
import { useRef, useState } from 'react'
import s from './AddLessonForm.module.css'
import { formData } from '@/app/helpers/formData.helper'
import { createCardLesson } from '@/app/helpers/api/fetch.api'
import { PopUp } from '../PopUp'

export const AddLessonForm = () => {

    const formRef = useRef()

    const [isVisiblePopUp, setIsVisiblePopUp] = useState(false)

    const addLesson = async (e) => {
        const data = await formData(e, formRef)
        const res = await createCardLesson(data)

        // popup
        setIsVisiblePopUp({
            status: res.resStatus,
            message: res.resJson.message ? res.resJson.message : `Запись добавлена !`
        })
        setTimeout(() => {
            setIsVisiblePopUp(false)
        }, 3000)
    }
    return (
        <>
            <form className={`${s.form}`} ref={formRef}>
                <label className={`${s.label}`}>
                    Выберете дату урока:
                    <input className={`${s.field}`} type="date" name='dateLesson' />
                </label>
                <label className={`${s.label}`}>
                    Выберете время урока:
                    <select className={`${s.field}`} name='timeLesson' id="">
                        <option value="8:00 - 10:00">8:00 - 10:00</option>
                        <option value="10:00 - 12:00">10:00 - 12:00</option>
                        <option value="12:00 - 14:00">12:00 - 14:00</option>
                        <option value="14:00 - 16:00">14:00 - 16:00</option>
                        <option value="16:00 - 20:00">16:00 - 20:00</option>
                    </select>
                </label>
                <label className={`${s.label}`}>
                    Выберете инструктора:
                    <select className={`${s.field}`} name='instructorName' id="">
                        <option value="Пупкин В.А">Пупкин В.А</option>
                        <option value="Иванов В.П.">Иванов В.П.</option>
                        <option value="Сидоров Ф.А.">Сидоров Ф.А.</option>
                    </select>
                </label>
                <button className={`${s.btn}`} type="submit" onClick={(e) => addLesson(e)} >Добавить</button>
            </form>

            {isVisiblePopUp ?
                (<PopUp
                    status={isVisiblePopUp.status}
                    meesage={isVisiblePopUp.message}
                />) : null
            }
        </>

    )
}
