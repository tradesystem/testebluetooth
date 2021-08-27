import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelRecebimento extends Model {

    static table = 'recebimentos'

    @field('chave_trade') 
    chave_trade
    
    @field('docto') 
    docto

    @field('historico') 
    historico

    @field('valor') 
    valor

    @field('saldo') 
    saldo

    @field('valor_pago') 
    valor_pago

    @field('pessoa')
    pessoa

    @field('data_pagto')
    data_pagto

    @field('vencimento')
    vencimento


    async insertRecebimentos() {
        try {
            await api.get('android.php?method=getRecebimentos').then(
                retorno => {
                        retorno.data.map(async data => {
                        
                        const newRecebimento = await database.write( async () => {
                            const recebimento = await database.get('recebimentos').create(recebimento => {
                                recebimento.chave_trade = parseInt(data.chave)
                                recebimento.docto = data.docto
                                recebimento.historico = data.historico,
                                recebimento.valor = parseFloat(data.valor),
                                recebimento.saldo = parseFloat(data.saldo),
                                recebimento.valor_pago = parseFloat(data.valor_pago),
                                recebimento.pessoa = parseInt(data.pessoa),
                                recebimento.data_pagto = data.data_pagto,
                                recebimento.vencimento = data.vencimento
                            })
                            console.log('database produto pessoa: ' + recebimento)
                            return recebimento
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getRecebimentos(){
        const collection = database.get('recebimentos')
        let itens = await collection.query().fetch()
        return itens
    }

    async getRecebimento(id){
        const item = await this.collections.get('recebimentos').find(id).fetch()
        return item
    }
}

export default ModelRecebimento