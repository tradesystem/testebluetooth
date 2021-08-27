import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import mySchemas from './schema'

/************* IMPORTAR AQUI AS MODELS ***********/

import ModelCondicao from './models/ModelCondicao'
import ModelGrupos from './models/ModelGrupos' 
import ModelMovfc from './models/ModelMovfc'
import ModelMovimentacao from './models/ModelMovimentacao'
import ModelMovitem from './models/ModelMovitem'
import ModelOperador from './models/ModelOperador'
import ModelPedidoItem from './models/ModelPedidoItem'
import ModelPedido from './models/ModelPedido'
import ModelPessoa from './models/ModelPessoa'
import ModelPrecoPessoa from './models/ModelPrecoPessoa'
import ModelProduto from './models/ModelProduto'
import ModelRecebimento from './models/ModelRecebimento'
import ModelReservaItens from './models/ModelReservaItens'
import ModelVendedorRota from './models/ModelVendedorRota'
import ModelVisitaClienteRota from './models/ModelVisitaClienteRota'

/************* FIM IMPORT MODELS ****************/

const adapter = new SQLiteAdapter({
    schema: mySchemas
})

export const database = new Database({
    adapter,
    modelClasses: [
        ModelCondicao,
        ModelGrupos, 
        ModelMovfc,
        ModelMovimentacao,
        ModelMovitem,
        ModelOperador,
        ModelPedidoItem,
        ModelPedido,
        ModelPrecoPessoa,
        ModelPessoa,
        ModelProduto,
        ModelRecebimento,
        ModelReservaItens,
        ModelVendedorRota,
        ModelVisitaClienteRota
    ]
})
