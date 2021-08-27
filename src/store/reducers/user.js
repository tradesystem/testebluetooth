import { USER_LOGGED_IN, USER_LOGGED_OUT, ATUALIZA_PONTOS} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null,
    chave: null,
    pontos: 0,
    token: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGGED_IN:
            return{
                ...state,
                name: action.payload.Nome,
                email: action.payload.login,
                chave: action.payload.chave,
                pontos: action.payload.pontos,
                token: action.payload.token
            } 
        case USER_LOGGED_OUT:
            return{
                ...state,
                name: null,
                email: null,
                chave: null,
                token: null
            }
        case ATUALIZA_PONTOS:
            return{
                ...state,
                pontos: state.pontos - action.payload.pontos
            }
        default:
            return state
    }
}

export default reducer