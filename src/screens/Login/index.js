import React, {Component} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Animated
} from 'react-native'

import { connect } from 'react-redux'
import ModelOperador from '../../database/models/ModelOperador'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import { BottomSheet, ListItem } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        marginVertical: 15,
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 10
    }
})

const AnimatedProgress = Animated.createAnimatedComponent(AnimatedCircularProgress)

class Login extends Component {

    state = {
        loading: false,
        operadores: [],
        visivel: false,
        fill: 100,
        list: [
            { title: 'List Item 1' },
            { title: 'List Item 2' },
            {
              title: 'Cancel',
              containerStyle: { backgroundColor: 'red' },
              titleStyle: { color: 'white' },
              onPress: () => this.setState({visivel: false}),
            },
        ]
    }

    carregaOperadores = async () => {
        await this.setState({loading: true})
        let operador = new ModelOperador()
        await operador.insertOperador().then()
        let ops = await operador.getOperadores().then()
        console.log('OPS: ' + ops)
        await this.setState({operadores: ops})
        await this.setState({loading: false})
    }

    componentDidMount = async () => {
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                
                <BottomSheet
                    isVisible={this.state.visivel}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                    >
                    {this.state.list.map((l, i) => (
                        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>

                {!this.state.loading &&
                <View>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => this.carregaOperadores()}
                    >
                        <Text>Carregar Operadores</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => this.setState({visivel: true})}
                    >
                        <Text>Operador: </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text>Fazer Login</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.operadores}
                        keyExtractor={item => `${item.id}`}
                        ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                        renderItem={({item}) => 
                            <View><Text>{item.nome}</Text></View>
                        }
                    />
                </View>
                }
                {this.state.loading &&
                    <View>
                        <AnimatedCircularProgress
                            size={200}
                            width={30}
                            fill={this.state.fill}
                            tintColor="#ccc"
                            onAnimationComplete={() => console.log('Loading complete')}
                            backgroundColor="#3d5875"
                        > 
                            {
                                (fill) => (
                                    <Text>
                                        {fill.toFixed(2)} %
                                    </Text>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text>Carregando Operadores...</Text>
                    </View>
                }

             
            </SafeAreaView>
        )
    }

}

const mapStateToProps = (bluetooth) => {
    
    return {
      BLEList : bluetooth.BLEList,
      color: bluetooth.color,
      connectedDevice: bluetooth.connectedDevice,
      status: bluetooth.status
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        onAddBLE: device => dispatch(addBLE(device)),
        onChangeStatus: device => dispatch(changeStatus(device)),
        onConnectedDevice: device => dispatch(connectedDevice(device))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

/*
*/