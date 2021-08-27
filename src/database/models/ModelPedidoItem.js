import {Model} from '@nozbe/watermelondb'
import { field, writer } from '@nozbe/watermelondb/decorators'

class ModelPedidoItem extends Model {

    static table = 'pedidos_itens'

    @field('chave_pedido') 
    chave_pedido
    
    @field('valor_item') 
    valor_item

    @field('descricao') 
    descricao 

    @field('quantidade') 
    quantidade

    @field('total_item') 
    total_item

    @field('produto') 
    produto

    @writer
    async insertPedidoItem(data) {
        const newPedidoItem = await this.collections.get('pedidos_itens').create(pedidoItem => {
            pedidoItem.chave_pedido = data.chave_pedido
            pedidoItem.valor_item = data.valor_item
            pedidoItem.descricao = data.descricao
            pedidoItem.quantidade = data.quantidade,
            pedidoItem.total_item = data.total_item,
            pedidoItem.produto = data.produto
        })
        return newPedidoItem
    }
    async getPedidosItens(){
        const collectionPedidosItens = this.collections.get('pedidos_itens')
        let pedidosItens = await collectionPedidosItens.query().fetch()
        return pedidosItens
    }
}

export default ModelPedidoItem