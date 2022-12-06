import '../styles/DadosPedido.css'

const DadosPedido = () => {
    return (
        <div>
            <div className="header">
                <p>Dados do pedido</p>
            </div>
            <div className="container">
                <form>
                    <div className="side">
                        <div className="inputSidebySide">
                            <p>Data:</p>
                            <input className="inputestiloside" />
                        </div>
                        <div className="inputSidebySide2">
                            <p>Valor:</p>
                            <input className="inputestiloside" />
                        </div>
                    </div>
                    <div className="side">
                        <div className="inputSidebySide">
                            <p>Cliente:</p>
                            <input className="inputestiloside" />
                        </div>
                        <div className="inputSidebySide2">
                            <p>Tipo de pedido:</p>
                            <input className="inputestiloside" />
                        </div>
                    </div>
                    <div className="input">
                        <p>Produtos/Procedimentos:</p>
                        <input className="inputestilopedido" />
                    </div>
                    <div className="input">
                        <p>Observações:</p>
                        <textarea className="inputestilopedido"></textarea>
                    </div>
                    <div className="buttonline">
                        <button className="button">Salvar</button>
                        <button className="button">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DadosPedido;