import {Model} from '@nozbe/watermelondb'
import {field, writer} from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelGrupo extends Model {
    
    static table = 'grupos'

    @field('chave_trade') 
    chave_trade

    @field('nivel') 
    nivel

    @field('descricao') 
    descricao
    
    async insertGrupo() {
        try {
            await api.get('android.php?method=getGrupos').then(
                retorno => {
                        retorno.data.map(async data => {
                        const newGrupo = await database.write( async () => {
                            const grupo = await database.get('grupos').create(grupo => {
                                grupo.chave_trade = parseInt(data.chave_trade),
                                grupo.nivel = parseInt(data.nivel),
                                grupo.descricao = data.descricao
                            })
                            console.log('database grupo: ' + grupo)
                            return grupo
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    getGrupos = async () => {
        const collectionGrupos = database.get('grupos')
        let grupos = await collectionGrupos.query().fetch()
        console.log('grupos model: ' + grupos)
        return grupos
    }

    async getGrupo(id){
        const grupo = await this.collections.get('grupos').find(id).fetch()
        return grupo
    }
}

export default ModelGrupo