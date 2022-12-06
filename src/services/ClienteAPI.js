import { useState, useEffect } from "react";
import axios from './api'

function ClienteAPI() {
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        const getClientes = async ()=>{
            const res = await axios(`/cliente/list`);
            setClientes(res.data);
        }
        getClientes();
    }, []);

    return {
        clientes: [clientes, setClientes]
    }
}

export default ClienteAPI;