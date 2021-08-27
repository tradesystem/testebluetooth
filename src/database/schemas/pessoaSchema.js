import { tableSchema } from '@nozbe/watermelondb'

const pessoaSchema = tableSchema({
    name: 'pessoas',
    columns: [
        {
            name: 'chave_trade', 
            type: 'number'
        },
        {
            name: 'vendedor', 
            type: 'number'
        },
        {
            name: 'tipo_cadastro', 
            type: 'number'
        },
        {
            name: 'codigo', 
            type: 'number'
        },
        {
            name: 'nome',
            type: 'string'
        },
        {
            name: 'nome_fantasia', 
            type: 'string'
        },
        {
            name: 'telefone', 
            type: 'string'
        },
        {
            name: 'celular', 
            type: 'string'
        },
        {
            name: 'email', 
            type: 'string'
        },
        {
            name: 'endereco', 
            type: 'string'
        },
        {
            name: 'cidade', 
            type: 'number'
        },
        {
            name: 'cidade_descricao', 
            type: 'string'
        },
        {
            name: 'bairro',
            type: 'string'
        },
        {
            name: 'cep',
            type: 'string'
        },
        {
            name: 'endereco_numero',
            type: 'string'
        },
        {
            name: 'uf',
            type: 'string'
        },
        {
            name: 'ultima_atualizacao',
            type: 'string'
        },
        {
            name: 'rg_ie',
            type: 'string'
        },
        {
            name: 'cnpj_cpf',
            type: 'string'
        },
        {
            name: 'total_aberto',
            type: 'number'
        },
        {
            name: 'total_aprazo',
            type: 'number'
        },
        {
            name: 'numero_contas_aberto',
            type: 'number'
        },
        {
            name: 'bloqueio',
            type: 'string'
        },
        {
            name: 'bloqueio_descricao',
            type: 'string'
        }            
    ]
})

export default pessoaSchema