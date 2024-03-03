import styles from "./Hover.module.css"
// import Radium from "radium"
const Hover = ({value, hover, enter, leave}) => {
    const top = {
        marginTop : "-5rem",
    }
    const Right ={
        marginRight : "30rem",
        marginTop : "1rem"
    }
    const Bottom = {
        marginTop : "7rem"
    }
    const Left = {
        marginRight : "-30rem",
        marginTop : "1rem"
    }
    return (
        <div className={styles.container}>
            {hover ? value === "Top" ? <div style={top} className={styles.text}>Thanks for hovering! I'm a tooltip</div> : "" : ""}
            {hover ? value === "Right" ? <div style={Right} className={styles.text}>Thanks for hovering! I'm a tooltip</div> : "" : ""}
            {hover ? value === "Bottom" ? <div style={Bottom} className={styles.text}>Thanks for hovering! I'm a tooltip</div> : "" : ""}
            {hover ? value === "Left" ? <div style={Left} className={styles.text}>Thanks for hovering! I'm a tooltip</div> : "" : ""}
            <h3 className={styles.Hover} onMouseEnter={enter} onMouseLeave={leave}>Hover over me</h3>
        </div>
    )
}
export default Hover;