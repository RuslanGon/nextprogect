import css from './page.module.css'


const DarckModelToggle = () => {
    const mode = "light"
  return (
    <div className={css.container}>
        <div className={css.icon}>🌙</div>
        <div className={css.icon}>🔆</div>
        <div className={css.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}}></div>
    </div>
  )
}

export default DarckModelToggle