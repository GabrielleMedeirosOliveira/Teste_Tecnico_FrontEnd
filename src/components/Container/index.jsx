import { ContainerForm } from "../ContainerForm"
import { ContainerInfo } from "../ContainerInfo"
import style from "./style.module.css";


export const Container = () =>{
    return (
        <div className={style.container}>
            <ContainerForm/>
            <ContainerInfo/>
        </div>
    )
}