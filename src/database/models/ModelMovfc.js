import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

class ModelMovfc extends Model {
    static table = 'movfc'

    @field('chave_trade') 
    chave_trade
    
    @field('empresa') 
    empresa

    @field('data') 
    data

    @field('caixa_numero') 
    caixa_numero

    @field('natureza') 
    natureza

    @field('condicao') 
    condicao

    @field('docto') 
    docto

    @field('historico') 
    historico

    @field('valor') 
    valor
    
    @field('cancelado') 
    cancelado

    @field('origem') 
    origem

    @field('a_vista') 
    a_vista

    @field('pessoa') 
    pessoa

    async getMovfcs(){
        const collection = this.collections.get('movfc')
        let itens = await collection.query().fetch()
        return itens
    }

    async getMofc(id){
        const item = await this.collections.get('movfc').find(id).fetch()
        return item
    }
}

export default ModelMovfc