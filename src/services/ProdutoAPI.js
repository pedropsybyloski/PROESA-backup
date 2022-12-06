import { useState, useEffect } from "react";
import axios from './api';

function ProdutoAPI() {
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        const getProdutos = async ()=>{
            const res = await axios(`/produto/list`);
            setProdutos(res.data)  
        }
        getProdutos();
    }, []);

    return {
        produtos: [produtos, setProdutos]
    }
}

export default ProdutoAPI;