import { useState, useEffect } from "react";
import axios from 'axios';

function CidadeAPI() {
    const [cidades, setCidades] = useState([]);

    useEffect(()=>{
        const getCidades = async ()=>{
            const res = axios.get(`/cidade/list`);
            console.log(res.data);
        }
        getCidades();
    }, []);

    return {
        cidades: [cidades, setCidades]
    }
}

export default CidadeAPI;