import AsyncStorage from '@react-native-async-storage/async-storage'

async function salvarProdutos(listItem){
    let savedItems = []
    const response = await AsyncStorage.getItem('@Produtos')
    if(response) savedItems = JSON.parse(response)
    savedItems.push(listItem)
    console.log('produtos: ' + savedItems)
    savedItems.map(item => {
        AsyncStorage.setItem('@Produtos', JSON.stringify(item))
    }) 
    return 1
}


function getProdutos(){
    return AsyncStorage.getItem('@Produtos')
        .then(response => {
            if(response)
                return Promise.resolve(JSON.parse(response))
            else
                return Promise.resolve([])
        })
}

module.exports = { 
    salvarProdutos, 
    getProdutos 
}
