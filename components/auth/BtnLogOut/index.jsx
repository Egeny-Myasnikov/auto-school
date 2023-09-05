'use client'
import s from './BtnLogOut.module.css'
import { removeTokenFromLocalStorage } from '@/app/helpers/localstorage.helper'
import { useContext, useState } from 'react'
import { Context } from '@/app/Context'
import { useRouter } from 'next/navigation'
import { PopUp } from '@/components/PopUp'

export const BtnLogOut = () => {
    const router = useRouter()
    const [isVisiblePopUp, setIsVisiblePopUp] = useState(false)
    const [name, setName, isLogin, setIsLogin] = useContext(Context)
    const logOut = () => {
        setIsVisiblePopUp({
            status: 201,
            message: `До встречи ${name} !`
        })
        setTimeout(() => {
            removeTokenFromLocalStorage('token')
            setName('гость')
            setIsLogin(false)
            setIsVisiblePopUp(false)
            router.push('/signup')
        }, 3000)

    }

    return (
        <>
            <button
                onClick={logOut}
                className={`${s.btn}`}
            > Выйти</button>

            {isVisiblePopUp ?
                (<PopUp
                    status={isVisiblePopUp.status}
                    meesage={isVisiblePopUp.message}
                />) : null

            }
        </>
    )
}
