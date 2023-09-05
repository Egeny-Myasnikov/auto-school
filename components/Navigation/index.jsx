'use client'
import Link from "next/link"
import s from './Navigation.module.css'
import { useContext } from "react"
import { Context } from "@/app/Context"
export default function Navigation() {
    const [name, setName, isLogin, setIsLogin] = useContext(Context)
    return (
        <>
            {
                isLogin ? (
                    <nav className={`${s.navigate}`}>
                        <Link className={`${s.navigate__item}`} href="/">График вождения</Link>
                        <Link className={`${s.navigate__item}`} href="/add-driving-lesson">Записаться на вождение</Link>
                    </nav>
                )
                    : null
            }

        </>

    )
}
