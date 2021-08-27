import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelCondicao extends Model {

    static table = 'condicoes'

    @field('chave_trade') 
    chave_trade
    
    @field('codigo') 
    codigo

    @field('descricao') 
    descricao 

    @field('desconto') 
    desconto

    @field('acrescimo') 
    acrescimo

    @field('entrada') 
    entrada

    @field('intervalo_entrada') 
    intervalo_entrada

    @field('parcelas') 
    parcelas

    @field('intervalo') 
    intervalo
    
    @field('condicao_web') 
    condicao_web

    async insertCondicao() {
        try {
            await api.get('android.php?method=getCondicoes').then(
                retorno => {
                        retorno.data.map(async data => {
                        const newCondicao = await database.write( async () => {
                            const condicao = await database.get('condicoes').create(condicao => {
                                condicao.chave_trade = parseInt(data.chave)
                                condicao.codigo = parseInt(data.codigo)
                                condicao.descricao = data.descricao
                                condicao.desconto = parseFloat(data.desconto),
                                condicao.acrescimo = parseFloat(data.acrescimo),
                                condicao.entrada = parseFloat(data.entrada),
                                condicao.intervalo_entrada = parseInt(data.intervalo_entrada),
                                condicao.parcelas = parseInt(data.parcelas),
                                condicao.intervalo = parseInt(data.intervalo),
                                condicao.condicao_web = parseInt(data.condicao_web)
                            })
                            console.log('database condição: ' + condicao)
                            return condicao
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getCondicoes(){
        const collectionCondicoes = this.collections.get('condicoes')
        let condicoes = await collectionCondicoes.query().fetch()
        return condicoes
    }

    async getCondicao(id){
        const condicao = await this.collections.get('condicoes').find(id).fetch()
        return condicao
    }
}

export default ModelCondicao