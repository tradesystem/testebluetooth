import {Model} from '@nozbe/watermelondb'
import { field, writer } from '@nozbe/watermelondb/decorators'

class ModelReservaItens extends Model {
    static table = 'reserva_itens'

    @field('chave_reserva') 
    chave_reserva
    
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
    async insertReservaItem(data) {
        const newReservaItem = await this.collections.get('reserva_itens').create(reservaItem => {
            reservaItem.chave_reserva = data.chave_reserva,
            reservaItem.valor_item = data.valor_item,
            reservaItem.descricao = data.descricao,
            reservaItem.quantidade = data.quantidade,
            reservaItem.total_item = data.total_item,
            reservaItem.produto = data.produto
        })
        return newReservaItem
    }

    async getReservaItens(){
        const collections = this.collections.get('reserva_itens')
        let itens = await collections.query().fetch()
        return itens
    }

    async getReservaItem(id){
        const item = await this.collections.get('reserva_itens').find(id).fetch()
        return item
    }
}

export default ModelReservaItens