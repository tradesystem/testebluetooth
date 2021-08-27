import { tableSchema } from '@nozbe/watermelondb'

const movfcSchema = tableSchema({
    name: 'movfc',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'empresa', 
            type: 'number'
        },
        {
            name: 'data',
            type: 'string'
        },
        {
            name: 'caixa_numero', 
            type: 'number'
        },
        {
            name: 'natureza', 
            type: 'string'
        }, 
        {
            name: 'condicao', 
            type: 'number'
        },
        {
            name: 'docto', 
            type: 'string'
        },
        {
            name: 'historico', 
            type: 'string'
        },
        {
            name: 'valor', 
            type: 'number'
        },
        {
            name: 'cancelado',
            type: 'number'
        },
        {
            name: 'origem',
            type: 'number'
        },
        {
            name: 'a_vista',
            type: 'number'
        },
        {
            name: 'pessoa',
            type: 'number'
        }
    ]
})

export default movfcSchema
