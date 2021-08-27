import AsyncStorage from '@react-native-async-storage/async-storage'

async function salvarGrupos(listItem){
    let savedItems = []
    const response = await AsyncStorage.getItem('@Grupos')
    if(response) savedItems = JSON.parse(response)
    savedItems.push(listItem)
    console.log('grupos: ' + savedItems)
    savedItems.map(item => {
        AsyncStorage.setItem('@Grupos', JSON.stringify(item))
    }) 
    return 1
}

function getGrupos(){
    try {
        return AsyncStorage.getItem('@Grupos').then(response => {
            if(response)
                return Promise.resolve(JSON.parse(response))
            else
                return Promise.resolve([])
        })
    }catch(e){
        console.log(e)
    }
}

module.exports = { 
    salvarGrupos, 
    getGrupos
}