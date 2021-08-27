import { tableSchema } from '@nozbe/watermelondb'

const vendedorRotaSchema = tableSchema({
    name: 'vendedor_rotas',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'operador', 
            type: 'number'
        },
        {
            name: 'cliente',
            type: 'number'
        },
        {
            name: 'dia_semana',
            type: 'number'
        },
        {
            name: 'sequencia',
            type: 'number'
        }
    ]
  })
  
  export default vendedorRotaSchema