import { useContext } from 'react'
import css from './page.module.css'
import { ThemeContext } from '@/context/ThemeContext.jsx'


const DarckModelToggle = () => {
    // const mode = "light"
const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className={css.container} onClick={toggle}>
        <div className={css.icon}>🌙</div>
        <div className={css.icon}>🔆</div>
        <div className={css.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}}></div>
    </div>
  )
}

export default DarckModelToggle