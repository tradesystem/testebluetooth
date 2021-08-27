import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

class ModelMovimentacao extends Model {

    static table = 'movimentacao'

    @field('chave_trade') 
    chave_trade

    @field('nota_fiscal')
    nota_fiscal

    @field('valor_produtos')
    valor_produtos
    
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

    @field('modelo') 
    modelo
    
    @field('serie') 
    serie

    @field('tipo') 
    tipo

    @field('transmitido') 
    transmitido

    @field('cancelado') 
    cancelado

    @field('lancamento')
    lancamento

    async getMovimentacoes(){
        const collection = this.collections.get('movimentacao')
        let itens = await collection.query().fetch()
        return itens
    }

    async getMovimentacao(id){
        const item = await this.collections.get('movimentacao').find(id).fetch()
        return item
    }
}

export default ModelMovimentacao