import '../styles/ListaPedidos.css'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { useState } from 'react';

const ListaPedidos = () => {
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
                <p>Lista de Pedidos</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Lista de pedidos </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar a busca de um pedido, é necessário utilizar as barras de pesquisa "Data de inicio" e "Data final", insira nelas o período inicial e final de datas a serem incluidas na pesquisa. Em seguida selecione o pedido desejado para abrir seus dados.
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form>
                    <div className="input2">
                        <p>Buscar pedido:</p>
                        <div className="side">
                            <input placeholder="Data de inicio" className="datainput2" />
                            <input placeholder="Data final" className="datainput2" />
                        </div>
                    </div>
                    <div className="input">
                        <div className="inputestilo2">
                            <div className="lineclient">
                                <input className="showclient" defaultValue="Thiago Pankievicz" />
                                <button className="buttonclient">Excluir</button>
                            </div>
                        </div>
                    </div>
                    <div className="buttonline">
                        <Link to='/pedido/cadastro' className="button">Cadastrar</Link>
                        <Link to='/home' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListaPedidos;