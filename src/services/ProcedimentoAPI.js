import { useState, useEffect } from "react";
import axios from './api'

function ProcedimentoAPI() {
    const [procedimentos, setProcedimentos] = useState([]);

    useEffect(()=>{
        const getProcedimentos = async ()=>{
            const res = await axios(`/procedimento/list`);
            setProcedimentos(res.data);
        }
        getProcedimentos();
    }, []);

    return {
        procedimentos: [procedimentos, setProcedimentos]
    }
}

export default ProcedimentoAPI;