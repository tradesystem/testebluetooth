import { tableSchema } from '@nozbe/watermelondb'

const grupoSchema = tableSchema({
    name: 'grupos',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'nivel', 
            type: 'number'
        },
        {
            name: 'descricao', 
            type: 'string'
        }
    ]
})

export default grupoSchema