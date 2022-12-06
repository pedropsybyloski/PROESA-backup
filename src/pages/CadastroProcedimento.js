import '../styles/CadastroProcedimento.css'
import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalState } from '../GlobalState';
import { useState } from 'react';
import axios from '../services/api'
import Modal from 'react-modal';

const initialState = {
    nome: '',
    valor: 0,
    descricaoEvolucao: '',
    dataEvolucao: '',
    clientes: 0,
}

const CadastroProcedimento = () => {
    const state = useContext(GlobalState);
    const navigate = useNavigate()
    const [produtos] = state.produtosAPI.produtos;
    const [clientes] = state.clientesAPI.clientes;
    const [procedimento, setProcedimento] = useState(initialState);
    const [busca, setBusca] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
           await axios.post('/procedimento/create', { ...procedimento })
                .then((req, res) => {
                    setTimeout(() => {
                        alert('Procedimento criado com sucesso!');
                        navigate('/procedimento');
                        window.location.reload();
                    }, 2000);
                }).catch(err => {
                    console.log(err)
                })
        } catch (error) {
            alert(error);
        }
    }

    function handleChangeInput(e) {
        if (e.target.id === 'produtos') {
            const { name, value } = e.target;
            console.log(name, value)
            setProcedimento({ ...procedimento, [name]: Number(value) });
            console.log(procedimento)
        }
        if (e.target.id === 'clientes') {
            const { name, value } = e.target;
            console.log(name, value)
            setProcedimento({ ...procedimento, [name]: Number(value) });
            console.log(procedimento)
        } else {
            const { name, value } = e.target;
            name === 'valor' ?
                setProcedimento({ ...procedimento, [name]: Number(value) }) :
                setProcedimento({ ...procedimento, [name]: value });
            console.log(procedimento)
            
        }
    }
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    let buscaClientes = clientes.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div>
            <div className="header">
                <p>Cadastro de Procedimento</p>
                <img onClick={handleOpenModal} src="../icons/help.png" className="headIcon" alt="Help" />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className='modal-text'>
                        <div className='modalHeader'>
                            <h2> Cadastro de procedimento </h2>
                            <img onClick={handleCloseModal} src="../icons/close.png" className="modalIcon" alt="Help" />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <p>
                            Para realizar o cadastro de um procedimento, insira o nome do Cliente e em seguida abra o seletor "Selecione um cliente" para selecionar o cliente desejado, então insira o procedimento, valor da mão de obra, produto(s) utilizados. Data da evolução é o campo que é utilizado para marcar as datas das observações sobre o procedimento e Descrição da evolução onde estão os detalhes das observações. Em seguida clique em salvar para concluir o cadastro.
                            Exemplo:
                            <br />
                            Cliente: Aloísio Freitas
                            <br />
                            Procedimento: Depilação Corporal Completa
                            <br />
                            Mão de obra: 100,00
                            <br />
                            Produto: Cera de depilação
                            <br />
                            Data da evolução: 16/12/200
                            <br />
                            Descrição da evolução: O cliente apresentou vermelhidão na região da depilação após uma semana do procedimento.
                        </p>
                    </div>
                </Modal>
            </div>
            <div className="containerproc">
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <p>Cliente:</p>
                        <input type='text' value={busca} onChange={e => setBusca(e.target.value)} className='inputestilosidecadproc' />
                        <select name="clientes" id="clientes" className="inputestiloproc2" onChange={handleChangeInput}>
                            <option value="">Selecione um cliente</option>
                            {
                                buscaClientes.map(cliente => (
                                    <option value={cliente.idCliente} key={cliente.idCliente} >
                                        {cliente.nome}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div style={{ display: 'flex' }} className='input'>
                        <div className="inputSidebySide">
                            <p>Procedimento:</p>
                            <input className="inputestiloside" name='nome' onChange={handleChangeInput} />
                        </div>
                        <div className="inputSidebySide2">
                            <p>Mão de obra:</p>
                            <input className="inputestiloside" type='number' name='valor' onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="input">
                        <p>Produto:</p>
                        <select name="produtos" id="produtos" onChange={handleChangeInput} className="inputestiloproc2">
                            <option value="">Selecione uma categoria</option>
                            {
                                produtos.map(produto => (
                                    <option value={produto.idProduto} key={produto.idProduto}>
                                        {produto.nome}
                                    </option>
                                ))
                            }
                        </select>

                    </div>

                    <div className="input">
                        <p>Data da evolução:</p>
                        <input type='date' className="inputestiloprocdate" name='dataEvolucao' onChange={handleChangeInput} />
                    </div>
                    <div className="input">
                        <p>Descrição da evolução:</p>
                        <textarea className="inputestiloproc" name='descricaoEvolucao' onChange={handleChangeInput}></textarea>
                    </div>
                    <div className="buttonline">
                        <button type='submit' className="button">Salvar</button>
                        <Link to='/procedimento' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroProcedimento;