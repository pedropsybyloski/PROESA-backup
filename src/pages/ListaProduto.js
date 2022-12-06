import '../styles/ListaProduto.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../services/api'
import { useContext, useState } from 'react';
import { GlobalState } from '../GlobalState';
import Modal from 'react-modal';

const ListaProduto = () => {
    const state = useContext(GlobalState);
    const [busca, setBusca] = useState('');
    const navigate = useNavigate()
    const [produtos] = state.produtosAPI.produtos;    

    let buscaProdutos = produtos.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));
                        
    async function handleDestroy(id) {
        console.log(id)
        await axios.delete(`/produto/delete/${id}`)
            .then((req, res) => {
                setTimeout(() => {
                    alert('Produto excluido com sucesso!');
                    navigate('/home');
                    window.location.reload();
                }, 2000);
            }).catch( err => {
                console.log(err)
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
                <p>Lista de produtos</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                        <h2> Lista de produtos </h2>
                        <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br/>
                        <hr/>
                        <br/>
                        <p>
                           Para realizar a busca de um produto, é necessário utilizar a barra de pesquisa "Buscar produto", insira nela o nome do produto desejado. Em seguida selecione o produto desejado para abrir seus dados, ou selecione o botão excluir para deleta-lo.
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="container">
                <form>
                    <div className="input">
                        <p>Buscar produto:</p>
                        <input className="inputestilofullproduto" value={busca} onChange={e => setBusca(e.target.value)} />
                    </div>
                    <div className="input">
                        <div className="inputestilo2">
                            {
                                buscaProdutos.map(produto => (
                                    <div className="lineclient" key={produto.idProduto}>
                                        <input className="showclient" value={produto.nome} readOnly />
                                        <Link to={`/produto/update/${produto.idProduto}`} className="buttonedit" >Editar</Link>
                                        <button className="buttonclient" onClick={() => handleDestroy(produto.idProduto)}>Excluir</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="buttonline">
                        <Link to='/produto/cadastro' className="button">Cadastrar</Link>
                        <Link to='/home' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListaProduto;