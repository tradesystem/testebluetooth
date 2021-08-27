import { tableSchema } from '@nozbe/watermelondb'

const operadorSchema = tableSchema({
    name: 'operadores',
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
            name: 'nome', 
            type: 'string'
        },
        {
            name: 'senha',
            type: 'string'
        }
    ]
})

export default operadorSchema