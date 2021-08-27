import { tableSchema } from '@nozbe/watermelondb'

const reservaItemSchema = tableSchema({
    name: 'reserva_itens',
    columns: [
        {
            name: 'chave_reserva', 
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
            type: 'string'
        }
    ]
  })
  
  export default reservaItemSchema
