import { tableSchema } from '@nozbe/watermelondb'

const pedidoSchema = tableSchema({
    name: 'pedidos',
    columns: [
        {
            name: 'codigo', 
            type: 'number'
        },
        {
            name: 'total', 
            type: 'number'
        },
        {
            name: 'pessoa', 
            type: 'number'
        },
        {
            name: 'pessoa_nome', 
            type: 'string'
        },
        {
            name: 'condpag', 
            type: 'number'
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
            name: 'chavenf', 
            type: 'string'
        },
        {
            name: 'dados_adic', 
            type: 'string'
        },
        {
            name: 'modelo', 
            type: 'string'
        },
        {
            name: 'serie', 
            type: 'string'
        },
        {
            name: 'nota_fiscal', 
            type: 'number'
        },
        {
            name: 'tipo', 
            type: 'string'
        },
        {
            name: 'lancamento', 
            type: 'string'
        }
    ]
})

export default pedidoSchema
