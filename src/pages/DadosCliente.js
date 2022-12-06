import '../styles/DadosCliente.css'

const DadosCliente = () => {
    return (
        <div>
            <div className="header">
                <p>Edição de dados do cliente</p>
            </div>
            <div className="container">
                <form>
                    <div className="inputdados">
                        <p>Nome:</p>
                        <input className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>Telefone:</p>
                        <input className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>Endereço:</p>
                        <input className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>Email:</p>
                        <input type="email" className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>CPF:</p>
                        <input className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>Email:</p>
                        <input className="inputestilodados" />
                    </div>
                    <div className="inputdados">
                        <p>Histórico:</p>
                        <input list="serviços" className="inputestilodados" />
                        <datalist id="serviços">
                            <option value="Peeling" />
                            <option value="Depilação" />
                        </datalist>
                    </div>
                    <div className="buttonline">
                        <button className="button">Salvar</button>
                        {/* <button className="button">Gerar PDF</button> */}
                        <button className="button">Evolução</button>
                        <button className="button">Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DadosCliente;