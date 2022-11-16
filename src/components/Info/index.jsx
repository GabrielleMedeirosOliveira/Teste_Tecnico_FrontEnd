import { useContext } from "react";
import { CalculateContext} from "../../contexts/calculate";
import style from "./style.module.css";

export const Info = () =>{
    const antecipation = useContext(CalculateContext);


    return (
        <div className={style.container}>
            <p className={style.infoTime}>
                Amanhã: <span className={style.infoPrice}>R${antecipation.antecipation[1]}</span>
            </p>

            <p className={style.infoTime}>
                Em 15 dias: <span className={style.infoPrice}>R${antecipation.antecipation[15]}</span>
            </p>

            <p className={style.infoTime}>
                Em 30 dias: <span className={style.infoPrice}>R${antecipation.antecipation[30]}</span>
            </p>

            <p className={style.infoTime}>
                Em 90 dias: <span className={style.infoPrice}>R${antecipation.antecipation[90]}</span>
            </p>

        </div>
    )
}