import React, {Component} from 'react'

import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    FlatList
} from 'react-native'

import Produto from '../../classes/Produto'
import { Divider } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        marginVertical: 30
    }
})

class Produtos extends Component {

    state = {
        loading: false,
        tamanho: 1,
        indice: 0,
        produtos: []
    }

    componentDidMount(){
        this.buscarProdutos()
    }

    buscarProdutos = async () => {
        await Produto.getProdutos().then(itens => this.setState({produtos: itens}))        
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                
                <View>
                    <Divider orientation="horizontal" width={50}/>
                    <FlatList
                        ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                        data={this.state.produtos}
                        keyExtractor={(item) => `${item.chave}`}
                        renderItem={ ({item}) => 
                            <View>
                                <Text>{item.descricao}</Text>
                                <Divider orientation="horizontal" />
                                <Divider orientation="vertical" width={5} />
                                <Divider inset={true} insetType="middle" />
                            </View>
                        }
                    />
                </View>
                
            </SafeAreaView>
        )
    }

}

export default Produtos