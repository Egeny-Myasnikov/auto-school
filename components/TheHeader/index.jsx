'use client'
import Link from "next/link"
import s from './TheHeader.module.css'
import User from "../User"
import Navigation from "../Navigation"
import { useContext } from "react"
import { Context } from "@/app/Context"
import { BtnAuth } from "../BtnAuth"



export const TheHeader = () => {
    const [name, setName, isLogin, setIsLogin] = useContext(Context)


    return (
        <header className={`${s.header}`}>
            {isLogin ? <User /> : <BtnAuth />}
            <Navigation />


        </header>
    )
}