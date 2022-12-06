import '../styles/CadastroProduto.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../services/api';
import React, { useEffect, useState } from 'react';
import { GlobalState } from '../GlobalState';
import { useContext } from 'react';
import Modal from 'react-modal';

const initialState = {
    nome: '',
    valorUnitario: '',
}

const CadastroProduto = () => {
    const state = useContext(GlobalState);
    const [produtos] = state.produtosAPI.produtos;
    const param = useParams()
    const navigate = useNavigate();
    const [onEdit, setOnEdit] = useState(false);
    const [cadProduto, setCadProduto] = useState(initialState);

    useEffect(() => {
        if (param.id) {
            setOnEdit(true);
            produtos.forEach(prod => {
                if (prod.idProduto === Number(param.id)) {
                    setCadProduto(prod);
                }
            })
        } else {
            setOnEdit(false);
            setCadProduto(initialState);
        }
    }, [param.id, produtos]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (onEdit) {
                await axios.put(`/produto/update/${cadProduto.idProduto}`, { ...cadProduto })
                    .then((req, res) => {
                        setTimeout(() => {
                            navigate('/home');
                            window.location.reload();
                        }, 1500);
                    })
            } else {
                await axios.post('/produto/create', { ...cadProduto }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((req, res) => {
                        setTimeout(() => {
                            alert("Produto cadastrado com sucesso.")
                            navigate('/produto');
                            window.location.reload();
                        }, 1500);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        } catch (error) {

        }
    }

    function handleChangeInput(e) {
        const { name, value } = e.target;
        name === 'valorUnitario' ? setCadProduto({ ...cadProduto, [name]: Number(value) }) : setCadProduto({ ...cadProduto, [name]: value })
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
                <p>Cadastro de Produto</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Cadastro de produto </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar o cadastro de um produto insira o Nome e valor nos campos correspondentes. Em seguida clique em salvar para concluir o cadastro.
                            Exemplo:
                            <br />
                            Nome: Hidratante facial Monange
                            <br />
                            Valor: 25,00
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="block">
                        <div className="inputSidebySide">
                            <p>Nome:</p>
                            <input
                                name='nome'
                                type="text"
                                id="nome"
                                value={cadProduto.nome}
                                onChange={handleChangeInput}
                                className="inputestilosidecadastroprodutoname"
                            />
                        </div>
                        <div className="inputSidebySide">
                            <p>Valor:</p>
                            <input
                                name='valorUnitario'
                                type="number"
                                id="valorUnitario"
                                value={cadProduto.valorUnitario}
                                onChange={handleChangeInput}
                                className="inputestilosidecadastrovalor"
                            />
                        </div>
                    </div>
                    <div className="buttonline">
                        <button type='submit' className="button">Salvar</button>
                        <Link to='/produto' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroProduto;