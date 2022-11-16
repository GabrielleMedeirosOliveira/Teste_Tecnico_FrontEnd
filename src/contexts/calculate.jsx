import { createContext, useState } from "react";
import { api } from "../api";

export const CalculateContext = createContext();

export const CalculateProvider = ({children}) =>{

    const [antecipation, setAntecipation] = useState({});

    const calculateAnticipation = (data) =>{
        api.post("", data).then(resp => setAntecipation(resp.data)).catch(err => console.log(err))
    }

    return(
        <CalculateContext.Provider value={{antecipation, calculateAnticipation}}>
            {children}
        </CalculateContext.Provider>
    )

}