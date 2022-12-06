import '../styles/CadastroCliente.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from '../services/api'
import { useContext } from 'react';
import { GlobalState } from '../GlobalState';
import Modal from 'react-modal';

const initialState = {
    nome: "",
    CPF: "",
    dataNascimento: "",
    telefone: "",
    endereco: "",
    email: ""
}
const CadastroCliente = () => {
    const state = useContext(GlobalState);
    const [cadastroCliente, setCadastroCliente] = useState(initialState);
    const [clientes] = state.clientesAPI.clientes;
    const navigate = useNavigate();
    const param = useParams();
    const [onEdit, setOnEdit] = useState(false);

    useEffect(() => {
        if (param.id) {
            setOnEdit(true);
            clientes.forEach(cliente => {
                if (cliente.idCliente === Number(param.id)) {
                    setCadastroCliente(cliente);
                }
            })
        } else {
            setOnEdit(false);
            setCadastroCliente(initialState);
        }
    }, [param.id, clientes]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (onEdit) {
                await axios.put(`/cliente/update/${cadastroCliente.idCliente}`, { ...cadastroCliente })
                    .then((req, res) => {
                        setTimeout(() => {
                            navigate('/home');
                            window.location.reload();
                        }, 1500);
                    })
            }
            else {
                await axios.post('/cliente/create', { ...cadastroCliente })
                    .then((req, res) => {
                        setTimeout(() => {
                            alert('Cliente criado com sucesso!');
                            navigate('/');
                            window.location.reload();
                        }, 2000);
                    })
            }
        } catch (error) {
            alert(error);
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setCadastroCliente({ ...cadastroCliente, [name]: value });
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <div className="header">
                <p>Cadastro de cliente</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Cadastro de cliente </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar o cadastro de um cliente insira o Nome, CPF, Data de nascimento, Telefone, Endereço email do cliente nos campos correspondentes. Em seguida clique em salvar para concluir o cadastro.
                            <br />
                            <br />
                            Exemplo:
                            <br />
                            Nome: Amauri Junior da silva
                            <br />
                            CPF: 552.121.196-93
                            <br />
                            Data de nascimento: 16/12/2000
                            <br />
                            Telefone: 42 99999-9999
                            <br />
                            Endereço: Rua Francisco Burzios, 1490
                            <br />
                            Endereço de email: amauri.junior@gmail.com
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <p>Nome:</p>
                        <input className="inputestilocadastrocliente" name='nome' required value={cadastroCliente.nome} onChange={handleChangeInput} />
                    </div>
                    <div className="side">
                        <div className="inputSidebySide">
                            <p>CPF:</p>
                            <input className="inputestilocadastroclienteside" name='CPF' value={cadastroCliente.CPF} onChange={handleChangeInput} disabled={onEdit} />
                        </div>
                        <div className="dtninputSidebySide2">
                            <p>Data de nascimento:</p>
                            <input className="inputestilocadastroclienteside" name='dataNascimento' type='date' required value={cadastroCliente.dataNascimento} onChange={handleChangeInput}/>
                        </div>
                    </div>
                    <div className="input">
                        <p>Telefone:</p>
                        <input className="inputestilocadastrocliente" name='telefone' required value={cadastroCliente.telefone} onChange={handleChangeInput} />
                    </div>
                    <div className="input">
                        <p>Endereço:</p>
                        <input className="inputestilocadastrocliente" name='endereco' required value={cadastroCliente.endereco} onChange={handleChangeInput} />
                    </div>
                    <div className="input">
                        <p>Email:</p>
                        <input type="email" className="inputestilocadastrocliente" name='email' required value={cadastroCliente.email} onChange={handleChangeInput} />
                    </div>
                    <div className="buttonline">
                        <button className="button" type='submit'>Salvar</button>
                        <Link to='/cliente' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroCliente;