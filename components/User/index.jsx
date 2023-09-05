'use client'
import s from './User.module.css'
import Image from "next/image"
import kot from '@/public/kot.jpg'
import { useContext } from 'react'
import { Context } from '@/app/Context'
import { BtnLogOut } from "../auth/BtnLogOut"

export default function User() {
    const [name] = useContext(Context)
    return (
        <div className={s.user}>
            <div className={`${s.userAvatarWrap}`}>
                <Image
                    className={`${s.userAvatar}`}
                    src={kot}
                    alt="kot"
                />
            </div>
            <span className={s.userName}> {name}</span>
            <BtnLogOut />
        </div>
    )
}
