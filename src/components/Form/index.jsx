import style from "./style.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () =>{

    const formSchema = yup.object().shape({
        amount: yup.string().required("Field Required!"),
        installments: yup.string().required("Field Required!"),
        mdr: yup.string().required("Field Required!")
    });

    const {
        register,
        handleSubmit
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

            <label className={style.inputLabel}> Informe o valor da venda * </label>
            <input
                className={style.input}
                type="number"
                name="amount"
                {...register("amount")}
            />

            <label  className={style.inputParcel}>
                Em quantas parcelas * 
                <input
                    className={style.input}
                    type="number"
                    name="installments"
                    min="1"
                    max="12"
                    {...register("installments")}
                />
                <span className={style.numberOfParcel}>Máximo de 12 parcelas.</span>
            </label>

            <label className={style.inputLabel}> Informe o porcentual de MDR * </label>
            <input
                className={style.input}
                type="number"
                name="mdr"
                min="1"
                max="100"
                {...register("mdr")}
            />

            <button className={style.btnSimulate} type="submit"> Simular </button>

        </form>
    )
}