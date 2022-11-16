import { Info } from "../Info"
import style from "./style.module.css";


export const ContainerInfo = () =>{
    return (
        <div className={style.container}>
            <h2 className={style.containerTitle}>VOCÊ RECEBERÁ:</h2>
            <Info/>
        </div>
    )
}