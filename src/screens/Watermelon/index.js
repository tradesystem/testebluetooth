import React, {Component} from "react"
import { 
    View, 
    Text, 
    StyleSheet,
    FlatList
} from "react-native"

import ModelGrupos from "../../database/models/ModelGrupos"
import ModelProdutos from "../../database/models/ModelProduto"
import ModelPessoa from "../../database/models/ModelPessoa"

class Watermelon extends Component {

    state = {
        produtos: [],
        grupos: [],
        pessoas: []
    }

    componentDidMount = async () => {
        await this.loadData()

    }

    /*
    loadData = async () => {
        const collectionProdutos = database.get('produtos')
        let produtos = await collectionProdutos.query().fetch()
        //console.log('produtos: ' + produtos)
        this.setState({produtos: produtos})

        const collectionGrupos = database.get('grupos')
        let grupos = await collectionGrupos.query().fetch()
        this.setState({grupos: grupos})
    }
    */
   loadData = async () => {
       let mGrupos = new ModelGrupos()
       await mGrupos.getGrupos().then(retorno => {
           this.setState({grupos: retorno})
       })
       let mProdutos = new ModelProdutos()
       await mProdutos.getProdutos().then(retorno => {
           this.setState({produtos: retorno})
       })
       let mPessoas = new ModelPessoa()
       await mPessoas.getPessoas().then(retorno => {
           this.setState({pessoas: retorno})
       })
   }

    render(){
        return (
            <View style={styles.container}>
                <Text>Watermelon</Text>
                <FlatList
                    data={this.state.pessoas}
                    ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({item}) => 
                        <View>
                            <Text>{item.nome}</Text>
                        </View>
                    }
                />

                <FlatList
                    data={this.state.produtos}
                    ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({item}) => 
                        <View style={styles.item}>
                            <Text>{item.id}</Text>
                            <Text>{item.grupo1}</Text>
                            <Text>{item.chave_trade}</Text>
                            <Text>{item.descricao}</Text>
                            <Text>{item.preco_venda}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        marginVertical: 10,
        marginHorizontal: 12,

    }
})

export default Watermelon