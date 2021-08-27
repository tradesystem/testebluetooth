import React, {Component} from 'react'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    Dimensions
} from 'react-native'

import Produto from '../../classes/Produto'
import Grupo from '../../classes/Grupo'

import {ButtonGroup} from 'react-native-elements'

class Grupos extends Component {

    state = {
        loading: false,
        tamanho: 1,
        indice: 0,
        grupoSelecionado: 1,
        grupos: [],
        produtos: []
    }

    componentDidMount(){
        this.buscarGrupos()
        this.buscarProdutos()
    }

    buscarGrupos = async () => {
        await Grupo.getGrupos().then(itens => this.setState({grupos: itens}))        
    }

    buscarProdutos = async () => {
        await Produto.getProdutos().then(itens => this.setState({produtos: itens}))        
    }

    render(){

        const buttons= ['Diversos', 'Bebidas']
        return (
            <SafeAreaView style={styles.container}>
                {!this.state.loading &&
                <View 
                    style={{marginTop: 100}}
                >
                    <ButtonGroup
                        buttons={buttons}
                        containerStyle={styles.botoesGrupos}
                        selectedIndex={this.state.grupoSelecionado}
                        onPress={valor => this.setState({grupoSelecionado: valor})}
                    />

                    <FlatList
                        ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                        data={this.state.produtos.filter(item => item.grupo1 == this.state.grupoSelecionado)}
                        keyExtractor={(item) => `${item.chave}`}
                        renderItem={ ({item, index}) => 
                            <View><Text>{item.descricao}</Text></View>
                        }
                    />
                </View>
                }
            </SafeAreaView>
        )
    }
}

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        marginVertical: 30
    },
    botoesGrupos: {
        height: 90,
        width: WIDTH
    }
})

export default Grupos