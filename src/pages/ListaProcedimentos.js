import '../styles/ListaProcedimentos.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { GlobalState } from '../GlobalState';
import Modal from 'react-modal';

const ListaProcedimentos = () => {
    const state = useContext(GlobalState);
    const [clicked, setClicked] = useState(false);
    const [cliente] = state.clientesAPI.clientes;
    const [procedimento] = state.procedimentosAPI.procedimentos;
    //const [produtos_procedimentos] = state.produtos_procedimentosAPI.produtos_procedimentos;
    const [procCliente, setProcCliente] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function handleClick(id) {
        setProcCliente([]);
        setClicked(true);
        procedimento.forEach( v => {
            if(v.clientes.idCliente === id){
                setProcCliente(old => [...old, v])
            }
        })
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
                <p>Lista de Procedimentos</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Lista de procedimentos </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar a busca de um procedimento, é necessário utilizar as barras de pesquisa "Data de inicio" e "Data final", insira nelas o período inicial e final de datas a serem incluidas na pesquisa. Em seguida selecione o procedimento desejado para abrir seus dados.
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="input2proc">
                        <p>Procedimento:</p>
                        <div className="side">
                            <input placeholder="Data de inicio" className="datainput" />
                            <input placeholder="Data final" className="datainput" />
                        </div>
                    </div>
                    <div className="side">
                        <div className="input">
                            <div className="inputestilo2">
                                {
                                    cliente.map(cliente => (
                                        <div className="lineclient" key={cliente.idCliente} onClick={() => handleClick(cliente.idCliente)}>
                                            <button className="showclient" style={{ width: '300px' }} >{cliente.nome}</button>
                                            <button className="buttonclient">X</button>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                        <div className='sideinputestiloproc'>
                            {!clicked ?
                                procedimento.map(proc => (
                                    <div className="" key={proc.idProcedimento}>
                                        <p className="">Cliente: {proc.clientes.nome}</p>
                                        <p className="">Nome procedimento: {proc.nome}</p>
                                        <p className="">Valor: {proc.valor}</p>
                                        <p className="">Data: {proc.dataEvolucao}</p>
                                        <hr />
                                    </div>
                                ))
                                :
                                procCliente.length !== 0 ? procCliente.map(proc => (
                                    <div className="" key={proc.idProcedimento}>
                                        <p className="">Cliente: {proc.clientes.nome}</p>
                                        <p className="">Procedimento: {proc.nome}</p>
                                        <p className="">Valor: R${proc.valor}</p>
                                        <p className="">Descrição: {proc.descricaoEvolucao}</p>
                                        <p className="">Data: {proc.dataEvolucao}</p>
                                        <hr />
                                    </div>
                                ))
                                :
                                'Nenhum procedimento cadastrado'
                            }
                        </div>
                    </div>
                    <div className="buttonline">
                        <Link to='/procedimento/cadastro' className="button">Cadastrar</Link>
                        <Link to='/home' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListaProcedimentos;