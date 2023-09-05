'use client'

import { Context } from "@/app/Context"
import { profileUser } from "@/app/helpers/api/fetch.api"
import { getTokenFromLocalStorage } from "@/app/helpers/localstorage.helper"
import { useEffect, useState } from "react"

export const MyProvider = ({ children }) => {
    const [name, setName] = useState('гость')
    const [isLogin, setIsLogin] = useState(false)


    const hasToken = () => {
        const token = getTokenFromLocalStorage() || ''
        token !== '' ? setIsLogin(true) : setIsLogin(false)
    }

    useEffect(() => {
        (async () => {
            const user = await profileUser()
            setName(user.userName ? user.userName : 'гость')
        })()
        hasToken()

    }, [])

    return <Context.Provider value={[name, setName, isLogin, setIsLogin]}>
        {children}
    </Context.Provider>
}