import { tableSchema } from '@nozbe/watermelondb'

const pedidoItemSchema = tableSchema({
    name: 'pedidos_itens',
    columns: [
        {
            name: 'chave_pedido', 
            type: 'number'
        },
        {
            name: 'valor_item', 
            type: 'number'
        },
        {
            name: 'descricao', 
            type: 'string'
        },
        {
            name: 'quantidade', 
            type: 'number'
        },
        {
            name: 'total_item', 
            type: 'number'
        },
        {
            name: 'produto', 
            type: 'number'
        }
    ]
})

export default pedidoItemSchema
