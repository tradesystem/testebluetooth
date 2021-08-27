import { tableSchema } from '@nozbe/watermelondb'

const produtoSchema = tableSchema({
    name: 'produtos',
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
            name: 'preco_venda', 
            type: 'number'
        },
        {
            name: 'preco_venda2', 
            type: 'number'
        },
        {
            name: 'estoque', 
            type: 'number'
        },
        {
            name: 'grupo1', 
            type: 'number'
        },
        {
            name: 'grupo2', 
            type: 'number'
        },
        {
            name: 'grupo3', 
            type: 'number'
        },
        {
            name: 'reservado',
            type: 'number'
        }
    ]
})

export default produtoSchema