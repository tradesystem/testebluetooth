import { appSchema } from '@nozbe/watermelondb'

import condicaoSchema from './schemas/condicaoSchema'
import grupoSchema from './schemas/grupoSchema'
import movfcSchema from './schemas/movfcSchema'
import movimentacaoSchema from './schemas/movimentacaoSchema'
import movitemSchema from './schemas/movitemSchema'
import operadorSchema from './schemas/operadorSchema'
import pedidoItemSchema from './schemas/pedidoItemSchema'
import pedidoSchema from './schemas/pedidoSchema'
import pessoaSchema from './schemas/pessoaSchema'
import precoPessoaSchema from './schemas/precoPessoaSchema'
import produtoSchema from './schemas/produtoSchema'
import recebimentoSchema from './schemas/recebimentoSchema'
import reservaItemSchema from './schemas/reservaItemSchema'
import vendedorRotaSchema from './schemas/vendedorRotaSchema'
import visitaClienteRotaSchema from './schemas/visitaClienteRotaSchema'

const mySchemas = appSchema({
    version: 3,
    tables: [        
        condicaoSchema,
        grupoSchema, 
        movfcSchema,
        movimentacaoSchema,
        movitemSchema,
        operadorSchema,
        pedidoItemSchema,
        pedidoSchema,
        pessoaSchema,
        precoPessoaSchema,
        produtoSchema,
        recebimentoSchema,
        reservaItemSchema,
        vendedorRotaSchema,
        visitaClienteRotaSchema
    ]
})

export default mySchemas