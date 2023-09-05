import s from './PopUp.module.css'
export const PopUp = ({ status, meesage }) => {
    const className = (status === 201 || status === 200) ? s.PopUp__ok : s.PopUp__err
    return (
        <p className={`${s.PopUp} ${className} `}>
            {meesage}
        </p>
    )
}
