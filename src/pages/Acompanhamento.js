import '../styles/Acompanhamento.css'

const Acompanhamento = () => {
    return(
<div>
    <div className="header">
        <p>Acompanhamento do cliente</p>
    </div>
    <div className="container">
        <form>
            <div className="input">
                <p>Cliente:</p>
                <input className="inputestiloacomp"/>
            </div>
            <div className="side">
                <div className="inputSidebySide">
                    <p>Procedimento:</p>
                    <input className="inputestiloacompside"/>
                </div>
                <div className="inputSidebySide2">
                    <p>Data:</p>
                    <input className="inputestiloacompside"/>
                </div>
            </div>
            <div className="input">
                <p>Acompanhamento:</p>
                <textarea className="inputestiloacomp2"></textarea>
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

export default Acompanhamento;