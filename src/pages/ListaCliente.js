import '../styles/ListaCliente.css'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../GlobalState';
import { useContext } from 'react';
import { useState } from 'react';
import axios from '../services/api'
import Modal from 'react-modal';

const ListaCliente = () => {
    const state = useContext(GlobalState);
    const [clientes] = state.clientesAPI.clientes;
    const [busca, setBusca] = useState('');
    const navigate = useNavigate();

    let buscaClientes = clientes.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));

    async function handleSubmit(e) {
        e.preventDefault();
    }

    async function handleDestroy(id) {
        console.log(id)
        await axios.delete(`/cliente/delete/${id}`)
            .then((req, res) => {
                setTimeout(() => {
                    alert('Cliente excluido com sucesso!');
                    navigate('/');
                    window.location.reload();
                }, 2000);
            })
    }
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="header">
                <p>Lista de clientes</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Lista de clientes </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar a busca de um pedido, é necessário utilizar a barra de pesquisa "Buscar cliente", insira nela o nome do cliente. Em seguida selecione o botão "editar" do cliente desejado para abrir seus dados ou excluir para excluí-lo.
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <p>Buscar cliente:</p>
                        <input className="inputestilofullcliente" value={busca} onChange={e => setBusca(e.target.value)} />
                    </div>
                    <div className="input">
                        <div className="inputestilo2">
                            {
                                buscaClientes.map(c => (
                                    <div className="lineclient" key={c.idCliente}>
                                        <input className="showclient" defaultValue={c.nome} />
                                        <Link to={`/cliente/update/${c.idCliente}`} className="buttonedit" >Editar</Link>
                                        <button className="buttonclient" onClick={() => handleDestroy(c.idCliente)}>Excluir</button>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="buttonline">
                        <Link to='/cliente/cadastro' className="button">Cadastrar</Link>
                        <Link to='/home' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListaCliente;