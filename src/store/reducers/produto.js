import { PRODUTO_DETALHE, ADD_PROD, REMOVE_PROD, LIST_PROD, ALTERAR_PROD, LIMPAR_CARRINHO, SELECIONA_FRETE, REMOVE_FRETE} from '../actions/actionTypes'

const initialState = {
    produtos: [],
    totalProdutos: 0,
    totalVenda: 0,
    frete: 0,
    multiplicador: 10,
    produto: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROD:
            return{
                ...state,
                totalProdutos: state.totalProdutos + 1,
                totalVenda: state.totalVenda + Math.floor(action.payload.produto.Preco_Venda * state.multiplicador),
                produtos: [...state.produtos, action.payload.produto]
            } 
        

        case PRODUTO_DETALHE:  
        return{
                ...state,
                produto: action.payload.produto
            }

        case REMOVE_PROD:
            var atualizado =  [...state.produtos]  
            var posicao = action.payload.posicao 
            atualizado.splice(posicao, 1)
            /*
            for(var i = posicao;i<atualizado.length;i++){
	            atualizado[i].indice = atualizado[i].indice - 1 
            }
            */
            return{
                ...state,
                totalProdutos: state.totalProdutos - 1,
                totalVenda: state.totalVenda - Math.floor(action.payload.totalProduto * state.multiplicador),
                produtos: [...atualizado]
            }
        
        case LIST_PROD:
            var atualizado =  [...state.produtos]  
            var posicao = action.payload.posicao 
            atualizado.splice(posicao, 1, [action.payload.produto])
            return{
                ...state,
                produtos: state.produtos,
                totalVenda: state.totalVenda - action.payload.totalAntigo + action.payload.totalProduto,
                produtos: [...atualizado]
            }
        
        case ALTERAR_PROD:
            var chave = action.payload.chave
            var novaQuantidade = action.payload.qtd
            return{
                ...state,
                produtos: []
            }
        
        case LIMPAR_CARRINHO: 
            return {
                ...state,
                produtos: [],
                totalProdutos: 0,
                totalVenda: 0,
                frete: 0
            }
        case SELECIONA_FRETE:
            return {
                ...state,
                frete: action.payload.frete
            }
        case REMOVE_FRETE:
            return{
                ...state,
                frete: 0
            }
        default:
            return state
    }
}

export default reducer