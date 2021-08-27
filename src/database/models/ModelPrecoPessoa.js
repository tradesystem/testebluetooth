import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelPrecoPessoa extends Model {

    static table = 'precos_pessoas'

    @field('chave_trade') 
    chave_trade
    
    @field('chave_pessoa') 
    chave_pessoa

    @field('chave_produto') 
    chave_produto

    @field('preco') 
    preco

    @field('nome') 
    nome

    @field('descricao') 
    descricao

    async insertPrecosPessoas() {
        try {
            await api.get('android.php?method=getProdutosPessoas').then(
                retorno => {
                        retorno.data.map(async data => {
                        
                        const newProdutoPessoa = await database.write( async () => {
                            const produtoPessoa = await database.get('precos_pessoas').create(produtoPessoa => {
                                produtoPessoa.chave_trade = parseInt(data.chave)
                                produtoPessoa.chave_pessoa = parseInt(data.chave_pessoa)
                                produtoPessoa.chave_produto = parseInt(data.chave_produto)
                                produtoPessoa.preco = parseFloat(data.preco),
                                produtoPessoa.nome = data.nome,
                                produtoPessoa.descricao = data.descricao
                            })
                            console.log('database produto pessoa: ' + produtoPessoa)
                            return produtoPessoa
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getPrecosPessoas(){
        const collection = database.get('precos_pessoas')
        let itens = await collection.query().fetch()
        return itens
    }

    async getPrecoPessoa(id){
        const item = await this.collections.get('precos_pessoas').find(id).fetch()
        return item
    }
}

export default ModelPrecoPessoa