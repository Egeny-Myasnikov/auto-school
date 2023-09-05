"use client"
import { useContext, useRef, useState } from "react"
import { loginUser, createUser } from "@/app/helpers/api/fetch.api"
import s from './Reg.module.css'
import { setTokenToLocalStorage } from "@/app/helpers/localstorage.helper"
import { formData } from "@/app/helpers/formData.helper"
import { useRouter } from "next/navigation"
import { Context } from "@/app/Context"
import { PopUp } from "../PopUp"



export const Reg = () => {
    const router = useRouter()
    const formRegRef = useRef()
    const formLoginRef = useRef()
    const [isFormLogin, setIsFormLogin] = useState(false)

    const [isVisiblePopUp, setIsVisiblePopUp] = useState(false)

    const [name, setName, isLogin, setIsLogin] = useContext(Context)

    const formRegData = async (e) => {
        const data = await formData(e, formRegRef)
        const res = await createUser(data)
        setTokenToLocalStorage('token', res.resJson.token)
        setName(res.resJson.user.userName)
        setIsLogin(true)
        setIsVisiblePopUp({
            status: res.resStatus,
            message: res.resJson.message ? res.resJson.message : `Привет ${res.resJson.user.userName} !`
        })
        setTimeout(() => {
            setIsVisiblePopUp(false)
            if (res.resStatus === 201) {
                setIsLogin(true)
                router.push('/')
            }
        }, 3000)

    }

    const formLoginData = async (e) => {
        const data = await formData(e, formLoginRef)
        const user = await loginUser(data)
        setTokenToLocalStorage('token', user.resJson.token)
        setName(user.resJson.userName)
        setIsVisiblePopUp({
            status: user.resStatus,
            message: user.resJson.message ? user.resJson.message : `Привет ${user.resJson.userName}!`
        })
        setTimeout(() => {
            setIsVisiblePopUp(false)
            if (user.resStatus === 201) {
                setIsLogin(true)
                router.push('/')
            }
        }, 3000)



    }

    return (
        <>
            <h1>{isFormLogin ? 'Вход' : 'Регистрация'}</h1>

            <button
                className={`${s.signupForm__btn}`}
                onClick={() => setIsFormLogin(!isFormLogin)}
            >
                {isFormLogin ? 'Регистрация' : 'Вход'}
            </button>


            <form
                className={`${s.signupForm}`}
                ref={isFormLogin ? formLoginRef : formRegRef}
            >
                <label className={`${s.signupForm__label}`}>
                    Введите Email:
                    <input required={true} className={`${s.signupForm__field}`} type="email" name='email' placeholder="user@email.ru" autoComplete="email" />
                </label>
                {
                    !isFormLogin && (
                        <label className={`${s.signupForm__label}`}>
                            Ваше имя:
                            <input className={`${s.signupForm__field}`} type="text" name='userName' placeholder="Имя" autoComplete="userName" />
                        </label>
                    )
                }
                <label className={`${s.signupForm__label}`}>
                    {isFormLogin ? 'Введите пароль' : 'Придумайте пароль:'}
                    <input required={true} className={`${s.signupForm__field}`} type="password" name='password' autoComplete="current-password" />
                </label>
                <button
                    className={`${s.signupForm__btn}`}
                    type="submit"
                    onClick={isFormLogin ? (e) => formLoginData(e) : (e) => formRegData(e)}
                >
                    {isFormLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
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