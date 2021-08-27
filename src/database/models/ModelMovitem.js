import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

class ModelMovitem extends Model {

    static table = 'movitens'

    @field('chave_trade') 
    chave_trade

    @field('chavemov')
    chavemov

    @field('valor_item')
    valor_item
    
    @field('descricao') 
    descricao

    @field('pessoa_nome') 
    pessoa_nome

    @field('quantidade') 
    quantidade

    @field('produto') 
    produto

    @field('total_item') 
    total_item
}

export default ModelMovitem