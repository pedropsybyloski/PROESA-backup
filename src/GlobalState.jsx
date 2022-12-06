import React, {createContext} from "react";
import ClienteAPI from "./services/ClienteAPI";
import ProcedimentoAPI from "./services/ProcedimentoAPI";
import ProdutoAPI from "./services/ProdutoAPI";
import ProdutoProcedimentoAPI from './services/ProdutoProcedimentoAPI';

export const GlobalState = createContext();

export const DataProvider = ({children}) =>{

    const state = {
        clientesAPI: ClienteAPI(),
        produtosAPI: ProdutoAPI(),
        procedimentosAPI: ProcedimentoAPI(),
        //produtos_procedimentosAPI: ProdutoProcedimentoAPI() 
    };
    
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}