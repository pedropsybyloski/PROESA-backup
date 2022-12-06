import '../styles/CadastroPedido.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { GlobalState } from '../GlobalState';

const initialState = {
    dataPedido: '',
    observacao: '',
    clientes: 0
}

const CadastroPedido = () => {
    const state = useContext(GlobalState)
    const [produtos] = state.produtosAPI.produtos;
    const [clientes] = state.clientesAPI.clientes;
    const [pedido, setPedido] = useState(initialState);
    const [busca, setBusca] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(produtos)
        console.log(clientes)
        console.log(pedido)
    }

    function handleChangeInput(e) {
        const { name, value } = e.target;
        if (name === 'clientes') {
            setPedido({ ...pedido, [name]: value });
        }
        if (name === 'produtos') {
            setPedido({ ...pedido, [name]: value });
        }
    }

    console.log(produtos)

    let buscaClientes = clientes.filter(element => element.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div>
            <div className="header">
                <p>Cadastro de Pedido</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="side">
                        <div className="inputSidebySideped">
                            <p>Data:</p>
                            <input type='date' name='dataPedido' className="inputestilosideped" />
                        </div>
                    </div>
                    <div className="side">
                        <div className="inputSidebySideped">
                            <p>Cliente:</p>
                            <input type='text' value={busca} onChange={e => setBusca(e.target.value)} className='inputestiloside' />
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
                    </div>
                    <div className="input">
                        <p>Produtos:</p>
                        <input type='text' list='produtos' className="prodprocinput" />
                        <datalist id='produtos'>
                            {
                                produtos.map((prod, key) => (
                                    <option value={prod.name} key={key}>{prod.name}</option>
                                ))
                            }
                        </datalist>
                    </div>
                    <div className="input">
                        <p>Descrição:</p>
                        <textarea className="inputestilopedido" name='observacao'></textarea>
                    </div>
                    <div className="buttonline">
                        <button type='submit' className="button">Salvar</button>
                        {/* <Link to='/cadastrocliente' className="button">Cadastrar cliente</Link> */}
                        <Link to='/pedidos' className="button">Voltar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CadastroPedido;