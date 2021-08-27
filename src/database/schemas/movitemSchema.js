import { tableSchema } from "@nozbe/watermelondb/Schema"

const movitemSchema = tableSchema({ 
	name: 'movitens',
	columns: [
		{
			name: 'chave_trade',
			type: 'number'
		},
		{
			name: 'chavemov',
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
		},
	]

})

export default movitemSchema