/* import { useState, useEffect } from "react";
import axios from './api'

function ProdutoProcedimentoAPI() {
    const [produtoProcedimentos, setProdutoProcedimentos] = useState([]);

    useEffect(()=>{
        const getProdutoProcedimentos = async ()=>{
            const res = await axios(`/produtos_procedimentos/list`);
            setProdutoProcedimentos(res.data);
        }
        getProdutoProcedimentos();
    }, []);

    return {
        produtos_procedimentos: [produtoProcedimentos, setProdutoProcedimentos]
    }
}

export default ProdutoProcedimentoAPI; */