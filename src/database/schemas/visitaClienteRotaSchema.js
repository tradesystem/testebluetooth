import { tableSchema } from '@nozbe/watermelondb'

const visitaClienteRotaSchema = tableSchema({
    name: 'visita_cliente_rotas',
    columns: [
        {
            name: 'chave_rota', 
            type: 'number'
        },
        {
            name: 'operador', 
            type: 'number'
        },
        {
            name: 'sem_pedido', 
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
            name: 'data_visita',
            type: 'string'
        }
    ]
})

export default visitaClienteRotaSchema
  