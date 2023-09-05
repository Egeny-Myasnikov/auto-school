'use client'
import { getAllCardLesson } from "@/app/helpers/api/fetch.api"
import { useEffect, useState } from "react"
import RecordCard from "../RecordCard"
export const ListCardLessons = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        (async () => {
            const res = await getAllCardLesson()
            console.log(res);
            res.status !== 500 && setCardData(res)


        })()
    }, [cardData])
    return (
        <>
            {cardData.length === 0 ? <h3>Нет записей</h3> : ''}
            <div className="flex">
                {
                    (cardData === 'Unauthorized') ? <h3>Вы не авторизованы</h3> :
                        cardData.map((d, i) => <RecordCard key={d.id} cardData={d} index={i + 1} />)
                }
            </div>
        </>


    )
}
