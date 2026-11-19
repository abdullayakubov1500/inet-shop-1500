import type { FC } from 'react'
import s from './custom-btn.module.scss'

interface ICustomBtnProps {
    text: string
    icon?: string
    width: number
    className?: string
    disabled?: boolean,
    onClick?: ()=>void
}

const CustomBtn: FC<ICustomBtnProps> = ({text, icon, width, className, disabled, onClick}) => {
  return (
    <button 
        disabled={disabled}
        className={`${s.btn} ${ className ? className : '' }`} 
        style={{width}}
        onClick={onClick}
    >
        {
            icon ? <img src={icon} alt="" /> : ''
        }
        <span>{text}</span>
    </button>
  )
}

export default CustomBtn