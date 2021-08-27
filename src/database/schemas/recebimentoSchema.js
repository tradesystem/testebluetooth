import { tableSchema } from '@nozbe/watermelondb'

const recebimentoSchema = tableSchema({
    name: 'recebimentos',
    columns: [
        {
            name: 'chave_trade', 
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
            name: 'saldo', 
            type: 'number'
        },
        {
            name: 'valor_pago', 
            type: 'number'
        },
        {
            name: 'pessoa', 
            type: 'number'
        },
        {
            name: 'data_pagto', 
            type: 'string'
        },
        {
            name: 'vencimento',
            type: 'string'
        }
    ]
})

export default recebimentoSchema