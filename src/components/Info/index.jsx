import style from "./style.module.css";

export const Info = () =>{

    return (
        <div className={style.container}>
            <p className={style.infoTime}>
                Amanhã: <span className={style.infoPrice}>R$0,00</span>
            </p>

            <p className={style.infoTime}>
                Em 15 dias: <span className={style.infoPrice}>R$0,00</span>
            </p>

            <p className={style.infoTime}>
                Em 30 dias: <span className={style.infoPrice}>R$0,00</span>
            </p>

            <p className={style.infoTime}>
                Em 90 dias: <span className={style.infoPrice}>R$0,00</span>
            </p>

        </div>
    )
}