import {USER_LOGGED_IN, USER_LOGGED_OUT, ATUALIZA_PONTOS} from './actionTypes'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return{
        type: USER_LOGGED_OUT
    }
}

export const atualizaPontos = () => {
    return {
        type: ATUALIZA_PONTOS
    }
}