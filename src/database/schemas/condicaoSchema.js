import { tableSchema } from '@nozbe/watermelondb'

const condicaoSchema = tableSchema({
    name: 'condicoes',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'codigo', 
            type: 'number'
        },
        {
            name: 'descricao',
            type: 'string'
        },
        {
            name: 'desconto', 
            type: 'number'
        },
        {
            name: 'acrescimo', 
            type: 'number'
        },
        {
            name: 'entrada', 
            type: 'number'
        },
        {
            name: 'intervalo_entrada', 
            type: 'number'
        },
        {
            name: 'parcelas', 
            type: 'number'
        },
        {
            name: 'intervalo', 
            type: 'number'
        },
        {
            name: 'condicao_web',
            type: 'boolean'
        }
    ]
})

export default condicaoSchema