import React, {Component} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native'

import { 
    BluetoothManager,
    BluetoothEscposPrinter 
} from 'tp-react-native-bluetooth-printer'

import { changeStatus, addBLE, connectedDevice } from '../../store/actions/bluetooth'
import { connect } from 'react-redux'
import ModelOperador from '../../database/models/ModelOperador'

import BLE from '../../components/BLE'
import Nfce from '../../classes/Nfce'

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

class Imprimir extends Component {

    state = {
        printers: [],
        impressoraAtual: null,
        status: '',
        device: [],
        nfce: '',
        operadores: [],
        visivel: false,
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
        let operador = new ModelOperador()
        await operador.insertOperador()
        //console.log(produto)
    }

    getOperadores = async () => {
        let operador = new ModelOperador()
        await this.setState({operadores: operador.getOperadores()})
        console.log('operadores state: ' + this.state.operadores)
    }

    componentDidMount = async () => {
        //await this.carregaOperadores()
        await this.setState({nfce: Nfce.gerarChave()})
        //await this.getOperadores()
    }

   startScan = () => {
       BluetoothManager.isBluetoothEnabled().then(
           (enabled) => {
               console.log(enabled)
               BluetoothManager.enableBluetooth().then( 
                    (r) => {
                        let paired = []
                        if(r && r.length > 0)
                            for(var i = 0; i < r.length; i++){
                                try {
                                    paired.push(JSON.parse(r[i]))
                                } catch (e){
                            }
                        }
                        this.setState({printers: paired})
                        console.log('Paired: ' + this.state.printers)
                    },
                    err => {
                       console.log(err)
                    }
               )
           },
           (err) => {
               console.log(err)
           }
       )
   }

    connectDevice = async () => {
        console.log(this.state.printers[0])
        BluetoothManager.connect(this.state.printers[0].address)
        .then(
            (s) => {
                this.setState({
                  loading: false,
                  impressoraAtual: this.state.printers[0].address
                });
              },
              (e) => {
                this.setState({
                  loading: false,
                });
                console.log(e)
              }
        )
        .then(
            BluetoothEscposPrinter.printerInit().then(
                async res => {
                    await this.printQRCode(this.state.nfce)
                    await BluetoothEscposPrinter.printText("\n\r\n\r" + "OK" + "\n\r\n\r\n\r\n\r\n\r", {});
                },
                err => {
                    console.log(err)
                }
            )
            
        )
    }

    printQRCode = async (qrCodeText, qrCodeWidth = 200, leftPadding = 90) => {
        return await BluetoothEscposPrinter.printQRCode(
          qrCodeText,
          qrCodeWidth,
          BluetoothEscposPrinter.ERROR_CORRECTION.H,
          leftPadding
        )
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
                <View style={{flex: 9}}>
                    <Text>Login</Text>

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

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => this.startScan()}
                    >
                        <Text>Start Scan</Text>
                    </TouchableOpacity>

                    {this.state.printers != '' &&
                        <TouchableOpacity
                            onPress={() => this.connectDevice()}
                            style={styles.botao}
                        >
                            <Text>Connect Device</Text>
                        </TouchableOpacity>
                    }


                    {this.state.device &&
                        <View><Text>device: {JSON.stringify(this.state.device)}</Text></View>
                    }

                    <FlatList
                        data={this.state.operadores}
                        keyExtractor={item => `${item.id}`}
                        ListEmptyComponent={<View><Text>Sem itens</Text></View>}
                        renderItem={({item}) => 
                            <View><Text>{item.nome}</Text></View>
                        }
                    />
                </View>
                    
                <View style={{flex: 1}} >
                    <BLE />
                </View>
             
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

export default connect(mapStateToProps, mapDispatchToProps)(Imprimir)