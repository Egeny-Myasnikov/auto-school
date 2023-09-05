import { Context } from "@/app/Context"
import { useContext } from "react"
import s from './BtnAuth.module.css'
import Link from "next/link"
import { BtnLogOut } from "../auth/BtnLogOut"

export const BtnAuth = () => {
    const [name, setName, isLogin, setIsLogin] = useContext(Context)


    return (
        <>
            {
                isLogin ? (
                    <BtnLogOut />
                )
                    : (
                        <Link className={`${s.btn}`} href='/signup'>Регистрация</Link>
                    )
            }
        </>
    )
}
