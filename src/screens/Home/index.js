import React, {Component} from 'react'

import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    View
} from 'react-native'

/******* CLASSES ********/
import ModelProduto from '../../database/models/ModelProduto'
import ModelPessoa from '../../database/models/ModelPessoa'
import ModelGrupos from '../../database/models/ModelGrupos'
import Nfce from '../../classes/Nfce'

import { AnimatedCircularProgress } from 'react-native-circular-progress'
import api from '../../services/api'
import QRCode from 'react-native-qrcode-svg'

import { database } from '../../database'


class Home extends Component {

    state = {
        loading: false,
        tamanho: 1,
        indice: 0,
        products: [],
        groups: [],
        nfce: '0'
    }

    componentDidMount = async () => {
        await this.setState({nfce: Nfce.gerarChave()})
        console.log('nfce: ' + this.state.nfce)
    }

    carregar = () => {
        Alert.alert(
            "Carregar", 
            "Deseja Carregar as informações?",
            [
                {
                    text: "Não",
                    onPress: () => console.log('Cancel'),
                    style: 'cancel'
                },
                {
                    text: "Sim",
                    onPress: async () => {
                        await this.setState({loading: true})
                        await this.carregarProdutos()
                        await this.carregarPessoas()
                        await this.carregarGrupos()
                        await this.setState({loading: false})
                    }
                }
            ]
        )
    }

    carregarPessoas = async () => {
        try {
            
            const destroyPessoa = await database.write(async () => {
                const collectionPessoas = await database.get('pessoas')
                await collectionPessoas.query().destroyAllPermanently()
            }).then(async () => {                
                    let pessoa = new ModelPessoa()
                    await pessoa.insertPessoa()
                }
            )
    
        }catch(e){
            throw new Error(e)
        }
    }

    carregarProdutos = async () => {
        try {
            const destroyProduto = await database.write(async () => {
                const collectionGrupos = await database.get('produtos')
                await collectionGrupos.query().destroyAllPermanently()
            }).then(async () => {
                let produto = new ModelProduto()
                await produto.insertProduto()
            })
        }catch(e){
            throw new Error(e)
        }
    }

    carregarGrupos = async () => {
        try {

            const destroyGrupo = await database.write(async () => {
                const collectionGrupos = await database.get('grupos')
                await collectionGrupos.query().destroyAllPermanently()
            }).then(async () => {
                let grupo = new ModelGrupos()
                await grupo.insertGrupo()
            })

        }catch(e){
            throw new Error(e)
        }
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                {!this.state.loading &&
                <View>
                    
                    <View
                        style={styles.qrcode}
                    >
                        <Text>NFCE: {this.state.nfce}</Text>
                        
                        <QRCode
                            value={this.state.nfce}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Watermelon")}
                        style={styles.botao}
                    >
                        <Text>Watermelon</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.carregar()}
                        style={styles.botao}
                    >
                        <Text>Carregar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Produtos")}
                        style={styles.botao}
                    >
                        <Text>Produtos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Grupos")}
                        style={styles.botao}
                    >
                        <Text>Grupos</Text>
                    </TouchableOpacity>
                    
                </View>
                }
                {this.state.loading &&
                    <View>
                        <AnimatedCircularProgress
                            size={120}
                            width={15}
                            fill={this.state.tamanho}
                            tintColor="#00e0ff"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#3d5875"
                        > 
                            {
                                (fill) => (
                                    <Text>
                                        {this.state.indice} %
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text>Carregando ...</Text>
                    </View>
                }
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        marginVertical: 30,
        borderWidth: 2,
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    qrcode: {
        alignItems: 'center'
    }
})

export default Home