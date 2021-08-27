import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelVisitaClienteRota extends Model {

    static table = 'visita_cliente_rotas'

    @field('chave_rota') 
    chave_rota
    
    @field('operador') 
    operador

    @field('sem_pedido') 
    sem_pedido

    @field('cliente') 
    cliente

    @field('dia_semana') 
    dia_semana

    @field('data_visita')
    data_visita

    async insertVisitaClienteRota(data) {
        try {

            const newVisitaClienteRota = await database.write( async () => {
                const visitaClienteRota = await database.get('visita_cliente_rotas').create(visitaClienteRota => {
                    visitaClienteRota.chave_rota = parseInt(data.chave_rota)
                    visitaClienteRota.operador = parseInt(data.operador),
                    visitaClienteRota.sem_pedido = parseInt(data.sem_pedido),
                    visitaClienteRota.cliente = parseInt(data.cliente),
                    visitaClienteRota.dia_semana = parseInt(data.dia_semana),
                    visitaClienteRota.data_visita = data.data_visita
                })
                console.log('database vendedor rotas: ' + visitaClienteRota)
                return visitaClienteRota
            })

        }catch(e){
            throw new Error(e)
        }
    }

    async getVisitaClienteRotas(){
        const collection = database.get('visita_cliente_rotas')
        let itens = await collection.query().fetch()
        return itens
    }

    async getVisitaClienteRota(id){
        const item = await this.collections.get('visita_cliente_rotas').find(id).fetch()
        return item
    }
}

export default ModelVisitaClienteRota