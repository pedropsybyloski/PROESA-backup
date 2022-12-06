import '../styles/TelaPrincipal.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const TelaPrincipal = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(()=>{
        const getUsuario = async ()=>{
            const res = await axios(`/usuario/list`);
            setUsuario(res.data[0])
        }
        getUsuario();
    }, []);

    return (
        <div>
            <div className="header">
                <p>Bem vindo(a), {usuario.login}.</p>
            </div>
            <div className="container">
                <Link to='/cliente' className="botoes"><p>Cliente</p></Link>
                <Link to='/produto' className="botoes"><p>Produto</p></Link>
                <Link to='/procedimento' className="botoes"><p>Procedimentos</p></Link>
                <Link to='/pedidos' className="botoes"><p>Pedidos</p></Link>
            </div>
            <div className="footer">
                <p>Ponta Grossa - Paraná</p>
            </div>
        </div>
    );
};

export default TelaPrincipal;