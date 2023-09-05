import { Greeting } from '@/components/Greeting'
import s from './home.module.css'
import { ListCardLessons } from '@/components/ListCardLessons'

export default function Home() {

  return (
    <>
      <h1>График вождения</h1>

      <Greeting />
      <ListCardLessons />



    </>
  )
}
