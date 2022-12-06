// componentes
import TelaPrincipal from './pages/TelaPrincipal';
import TelaLogin from './pages/TelaLogin';
import ListaProcedimentos from './pages/ListaProcedimentos';
import ListaPedidos from './pages/ListaPedidos';
import ListaCliente from './pages/ListaCliente';
import DadosCliente from './pages/DadosCliente';
import DadosPedido from './pages/DadosPedido';
import CadastroProduto from './pages/CadastroProduto';
import CadastroProcedimento from './pages/CadastroProcedimento';
import CadastroPedido from './pages/CadastroPedido';
import CadastroCliente from './pages/CadastroCliente';
import Acompanhamento from './pages/Acompanhamento';
import ListaProduto from './pages/ListaProduto';
import { DataProvider } from './GlobalState';

// seção de estilos
import './App.css';

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TelaLogin />} > </Route>
            <Route path="/home" element={<TelaPrincipal />} > </Route>
            <Route path="/procedimento" element={<ListaProcedimentos />} > </Route>
            <Route path="/pedidos" element={<ListaPedidos />} > </Route>
            <Route path="/cliente" element={<ListaCliente />} > </Route>
            <Route path="/produto" element={<ListaProduto />} > </Route>
            <Route path="/dadoscliente" element={<DadosCliente />} > </Route>
            <Route path="/dadospedido" element={<DadosPedido />} > </Route>
            <Route path="/produto/cadastro" element={<CadastroProduto />} > </Route>
            <Route path="/procedimento/cadastro" element={<CadastroProcedimento />} > </Route>
            <Route path="/pedido/cadastro" element={<CadastroPedido />} > </Route>
            <Route path="/cliente/cadastro" element={<CadastroCliente />} > </Route>
            <Route path="/cliente/update/:id" exact element={<CadastroCliente />} > </Route>
            <Route path="/produto/update/:id" exact element={<CadastroProduto />} > </Route>
            <Route path="/acompanhamento" element={<Acompanhamento />} > </Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
