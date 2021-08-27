import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
class ModelPedido extends Model {

    static table = 'pedidos'

    @field('codigo') 
    codigo
    
    @field('total') 
    total

    @field('pessoa') 
    pessoa

    @field('pessoa_nome') 
    pessoa_nome

    @field('condpag') 
    condpag

    @field('desconto') 
    desconto

    @field('acrescimo') 
    acrescimo

    @field('chavenf') 
    chavenf

    @field('dados_adic') 
    dados_adic
    
    @field('modelo') 
    modelo

    @field('serie') 
    serie

    @field('nota_fiscal') 
    nota_fiscal

    @field('tipo') 
    tipo

    @field('lancamento') 
    lancamento

    async insertPedido(data) {

        try {
            const newPedido = await database.write( async () => {
                const pedido = await database.get('pedidos').create(pedido => {
                    pedido.codigo = data.codigo,
                    pedido.total = data.total,
                    pedido.pessoa = data.pessoa,
                    pedido.pessoa_nome = data.pessoa_nome,
                    pedido.condpag = data.condpag,
                    pedido.desconto = data.desconto,
                    pedido.acrescimo = data.acrescimo,
                    pedido.chavenf = data.chavenf,
                    pedido.dados_adic = data.dados_adic,
                    pedido.modelo = data.modelo,
                    pedido.serie = data.serie,
                    pedido.nota_fiscal = data.nota_fiscal,
                    pedido.tipo = data.tipo,
                    pedido.lancamento = data.lancamento
                })
                return pedido
            })
        }catch (e){
            throw new Error (e)
        }
    }

    async getPedidos(){
        const collectionPedidos = this.collections.get('pedidos')
        let pedidos = await collectionPedidos.query().fetch()
        return pedidos
    }

    async getPedido(id){
        const pedido = await this.collections.get('pedidos').find(id).fetch()
        return pedido
    }
}

export default ModelPedido