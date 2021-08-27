import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelVendedorRota extends Model {

    static table = 'vendedor_rotas'

    @field('chave_trade') 
    chave_trade
    
    @field('operador') 
    operador

    @field('cliente') 
    cliente

    @field('dia_semana') 
    dia_semana

    @field('sequencia') 
    sequencia

    async insertVendedorRotas() {
        try {
            await api.get('android.php?method=getRotas').then(
                retorno => {
                        retorno.data.map(async data => {
                        const newRota = await database.write( async () => {
                            const rota = await database.get('vendedor_rotas').create(rota => {
                                rota.chave_trade = parseInt(data.chave)
                                rota.operador = parseInt(data.operador),
                                rota.cliente = parseInt(data.cliente),
                                rota.dia_semana = parseInt(data.dia_semana),
                                rota.sequencia = parseInt(data.sequencia)
                            })
                            console.log('database vendedor rotas: ' + rota)
                            return rota
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getVendedorRotas(){
        const collection = database.get('vendedor_rotas')
        let itens = await collection.query().fetch()
        return itens
    }

    async getVendedorRota(id){
        const item = await this.collections.get('vendedor_rotas').find(id).fetch()
        return item
    }
}

export default ModelVendedorRota