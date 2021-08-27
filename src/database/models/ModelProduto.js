import {Model} from '@nozbe/watermelondb'
import { field, writer } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelProduto extends Model {
    static table = 'produtos'

    @field('chave_trade') 
    chave_trade
    
    @field('codigo') 
    codigo
    
    @field('descricao') 
    descricao 
    
    @field('preco_venda') 
    preco_venda

    @field('preco_venda2') 
    preco_venda2

    @field('estoque') 
    estoque

    @field('grupo1')
    grupo1

    @field('grupo2')
    grupo2

    @field('grupo3')
    grupo3

    @field('reservado') 
    reservado

    
    async insertProdutos() {
        try {
            await api.get('android.php?method=getProdutos').then(
                retorno => {
                        retorno.data.map(async data => {
                        const newProduto = await database.write( async () => {
                            const produto = await database.get('produtos').create(produto => {
                                produto.chave_trade = parseInt(data.chave),
                                produto.codigo = parseInt(data.codigo),
                                produto.descricao = data.descricao,
                                produto.preco_venda = parseFloat(data.preco_venda),
                                produto.preco_venda2 = parseFloat(data.preco_venda2),
                                produto.estoque = parseInt(data.estoque),
                                produto.grupo1 = parseInt(data.grupo1),
                                produto.grupo2 = parseInt(data.grupo2),
                                produto.grupo3 = parseInt(data.grupo3),
                                produto.reservado = data.reservado
                            })
                            console.log('database produto: ' + produto)
                            return produto
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getProdutos(){
        const collectionGrupos = database.get('produtos')
        let grupos = await collectionGrupos.query().fetch()
        console.log('produtos model: ' + grupos)
        return grupos
    }

    async getProduto(id){
        const produto = await this.collections.get('produtos').find(id).fetch()
        return produto
    }
}

export default ModelProduto