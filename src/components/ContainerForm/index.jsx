import { Form } from "../Form"
import style from "./style.module.css";



export const ContainerForm = () =>{
    return (
        <div className={style.container}>
            <h1 className={style.containerTitle}>Simule sua Antecipação</h1>
            <Form/>
        </div>
    )
}