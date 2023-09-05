"use client"

import s from './MyForm.module.css'

export const MyForm = ({ children }) => {

    return (
        <>

            <form
                className={`${s.form}`}
            >
                {children}

            </form>




        </>
    )
}