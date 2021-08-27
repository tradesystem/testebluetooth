import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { getOperadores } from '../../services/api'
import { database } from '../'
import api from '../../services/api'

class ModelOperador extends Model {

    static table = 'operadores'

    @field('chave_trade') 
    chave_trade

    @field('codigo')
    codigo

    @field('nome')
    nome
    
    @field('senha') 
    senha

    async insertOperador() {
        try {
            await this.deleteAll().then( async retorno => {
                await getOperadores().then(res => {
                    console.log('ret: ' + res)
                })
                        //console.log(retorno)
                        /*
                        retorno.map(async data => {
                            const newOperador = await database.write( async () => {
                                const operador = await database.get('operadores').create(operador => {
                                    operador.chave_trade = parseInt(data.chave),
                                    operador.codigo = parseInt(data.codigo),
                                    operador.nome = data.nome
                                    operador.senha = data.senha
                                })
                                console.log('database operador: ' + operador)
                                return operador
                            })
                        })   
                    }
                )*/
            })
        }catch(e){
            throw new Error(e)
        }
    }

    async getOperadores(){
        const collectionOperadores =  await database.collections.get('operadores')
        let operadores = await collectionOperadores.query().fetch()
        return operadores
    }

    async getOperador(id){
        const operador = await this.collections.get('operadores').find(id).fetch()
        return operador
    }

    async deleteAll(){
        const newOperador = await database.write( async () => {
            const operadores = await database.get('operadores')
            await operadores.query().destroyAllPermanently()
        })
    }
}

export default ModelOperador