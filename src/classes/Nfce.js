/*
cUF - Código da UF do emitente do Documento Fiscal (43); -  2 caracteres
AAMM - Ano e Mês de emissão da NF-e;                     -  4 caracteres 
CNPJ - CNPJ do emitente;                                 - 14 caracteres
mod - Modelo do Documento Fiscal;                        -  2 caracteres
serie - Série do Documento Fiscal;                       -  3 caracteres
nNF - Número do Documento Fiscal;                        -  9 caracteres
tpEmis – forma de emissão da NF-e;                       -  1 caractere
cNF - Código Numérico que compõe a Chave de Acesso;      -  8 caracteres
cDV - Dígito Verificador da Chave de Acesso.             -  1 caractere
*/

import { random } from 'lodash'
import moment from 'moment'

function gerarChave(){
    let cUF = '43'
    let AAMM = moment().format('YYMM')
    let CNPJ = '12345678901234'
    let modelo = '02'
    let serie = '001'
    let rNF = '000002557'
    let tpEmis = '1'
    let cNF = random(10000000, 99999999)
    let cDV = '5'
    return cUF + AAMM + CNPJ + modelo + serie + rNF + tpEmis + cNF + cDV
}

module.exports = {
    gerarChave
}