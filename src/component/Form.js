import styles from "./Form.module.css"
const Form = ({value, update})=>  {
    return (
        <div className={styles.Form}>
            <h2>Select where you want to show hover text</h2>
            <div className={styles.container}>
                <div className={styles.radio}>
                <label>
                    <input type="radio" value="Top" checked={value === "Top"} onChange={()=> update("Top")}/>
                    Top
                </label>
                </div>
                <div className={styles.radio}>
                <label>
                    <input type="radio" value="Right" checked={value === "Right"} onChange={()=> update("Right")}/>
                    Right
                </label>
                </div>
                <div className={styles.radio}>
                <label>
                    <input type="radio" value="Bottom" checked={value === "Bottom"} onChange={()=> update("Bottom")}/>
                    Bottom
                </label>
                </div>
                <div className={styles.radio}>
                <label>
                    <input type="radio" value="Left" checked={value === "Left"} onChange={()=> update("Left")}/>
                    Left
                </label>
                </div>
            </div>
      </div>
    )
}

export default Form;