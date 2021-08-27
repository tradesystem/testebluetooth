import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.150/siacweb/',
    timeout: 15000
})

async function getOperadores(){
    let res = await api.get('android.php?method=getOperadores')
    console.log('retorno: ' + res.data)
    return res.data
}

async function getClientes(){
    let res = await api.get('android.php?method=getClientes')
    console.log('retorno: ' + res.data)
    return res.data
}

module.exports = {
    getOperadores, 
    getClientes 
}
export default api