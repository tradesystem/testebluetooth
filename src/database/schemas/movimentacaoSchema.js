import { tableSchema } from '@nozbe/watermelondb'

const movimentacaoSchema = tableSchema({
    name: 'movimentacao',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'nota_fiscal', 
            type: 'string'
        },
        {
            name: 'valor_produtos',
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
            type: 'number'
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
			name: 'tipo',
			type: 'string'
		},
		{
			name: 'transmitido',
			type: 'boolean'
		},
		{
			name: 'cancelado',
			type: 'boolean'
		},
		{
			name: 'lancamento',
			type: 'string'
		}
    ]
})

export default movimentacaoSchema