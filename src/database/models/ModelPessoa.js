import {Model} from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'
import { database } from '../'
import api from '../../services/api'

class ModelPessoa extends Model {

    static table = 'pessoas'

    @field('chave_trade') 
    chave_trade
    
    @field('vendedor') 
    vendedor

    @field('tipo_cadastro') 
    tipo_cadastro

    @field('codigo') 
    codigo

    @field('nome') 
    nome

    @field('nome_fantasia') 
    nome_fantasia

    @field('telefone') 
    telefone

    @field('celular') 
    celular

    @field('email') 
    email

    @field('endereco') 
    endereco

    @field('cidade') 
    cidade

    @field('cidade_descricao') 
    cidade_descricao

    @field('bairro') 
    bairro

    @field('cep') 
    cep

    @field('endereco_numero') 
    endereco_numero

    @field('uf') 
    uf

    @field('ultima_atualizacao') 
    ultima_atualizacao

    @field('rg_ie') 
    rg_ie

    @field('cnpj_cpf') 
    cnpj_cpf

    @field('total_aberto') 
    total_aberto

    @field('total_aprazo') 
    total_aprazo

    @field('numero_contas_aberto') 
    numero_contas_aberto

    @field('bloqueio') 
    bloqueio

    @field('bloqueio_descricao') 
    bloqueio_descricao

    async insertPessoa() {
        try {
            await api.get('android.php?method=getClientes').then(
                retorno => {
                        retorno.data.map(async data => {
                        
                        const newPessoa = await database.write( async () => {
                            const pessoa = await database.get('pessoas').create(pessoa => {
                                pessoa.chave_trade = parseInt(data.chave)
                                pessoa.vendedor = parseInt(data.vendedor)
                                pessoa.tipo_cadastro = data.tipo_cadastro
                                pessoa.codigo = parseInt(data.codigo),
                                pessoa.nome = data.nome,
                                pessoa.nome_fantasia = data.nome_fantasia,
                                pessoa.telefone = data.telefone,
                                pessoa.celular = data.celular,
                                pessoa.email = data.email,
                                pessoa.endereco = data.endereco,
                                pessoa.cidade = parseInt(data.cidade),
                                pessoa.cidade_descricao = data.cidade_descricao,
                                pessoa.bairro = data.bairro,
                                pessoa.cep = data.cep,
                                pessoa.endereco_numero = parseInt(data.endereco_numero),
                                pessoa.uf = data.uf,
                                pessoa.ultima_atualizacao = data.ultima_atualizacao,
                                pessoa.rg_ie = data.rg_ie,
                                pessoa.cnpj_cpf = data.cnpj_cpf,
                                pessoa.total_aberto = parseFloat(data.total_aberto),
                                pessoa.total_aprazo = parseFloat(data.total_aprazo),
                                pessoa.numero_contas_aberto = parseInt(data.numero_contas_aberto),
                                pessoa.bloqueio = data.bloqueio,
                                pessoa.bloqueio_descricao = data.bloqueio_descricao
                            })
                            console.log('database poessoa: ' + pessoa)
                            return pessoa
                        })
                    })   
                })
        }catch(e){
            throw new Error(e)
        }
    }

    async getPessoas(){
        const collectionGrupos = database.get('pessoas')
        let pessoas = await collectionGrupos.query().fetch()
        console.log('pessoas model: ' + pessoas)
        return pessoas
    }

    async getPessoa(id){
        const pessoa = await this.collections.get('pessoas').find(id).fetch()
        return pessoa
    }
}

export default ModelPessoa