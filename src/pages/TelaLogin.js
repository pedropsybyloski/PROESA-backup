import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalState } from '../GlobalState';
import '../styles/TelaLogin.css';

const initialState = {
    login: '',
    senha: ''
}

const TelaLogin = () => {
    const [login, setLogin] = useState(initialState);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post(`/usuario/login`, { ...login })
                .then((req, res) => {
                    navigate('/home');
                    window.location.reload();
                }).catch(err => {
                    alert(err.response.data.msg)
                })
        } catch (error) {
            console.log(error.data)
        }
    }

    return (
        <div>
            <div className="header">
                <p>Clínica de Estética Suzimara Assolari</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <div className="formin">
                        <img src="../icons/envelope-regular.svg" className="icon" alt="Email:" />
                        <input className="form-input" type="text" name='login' onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} placeholder="Usuário" />
                    </div>
                    <div className="formin">
                        <img src="../icons/lock-solid.svg" className="icon" alt="Senha:" />
                        <input className="form-input" type="password" name='senha' placeholder="Senha" onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value })} />
                    </div>
                    <button className="button btn-1" type="submit" value="Entrar">Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default TelaLogin;