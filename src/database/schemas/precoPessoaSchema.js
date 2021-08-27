import { tableSchema } from '@nozbe/watermelondb'

const precoPessoaSchema = tableSchema({
    name: 'precos_pessoas',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'chave_pessoa', 
            type: 'number'
        },
        {
            name: 'chave_produto', 
            type: 'number'
        },
        {
            name: 'preco',
            type: 'number'
        },
        {
            name: 'nome',
            type: 'string'
        },
        {
            name: 'descricao',
            type: 'string'
        }
    ]
})

export default precoPessoaSchema