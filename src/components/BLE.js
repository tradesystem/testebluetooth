import React from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet} from 'react-native'

class BLE extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return ( 
            <View
              style={styles.container}
            >
                <Text style={{backgroundColor: this.props.color}}>
                    Status: {this.props.status} 
                </Text>
                <Text>Color: {this.props.color}</Text>
                {this.props.connectedDevice && <Text>Device: {this.props.connectedDevice.name}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
    minHeight: 40,
    width: 150
  }
})

const mapStateToProps = ({bluetooth}) => {
  return {
    BLEList : bluetooth.BLEList,
    color: bluetooth.color,
    connectedDevice: bluetooth.connectedDevice,
    status: bluetooth.status
  };
}

const mapDispatchToProps = dispatch => ({
  addBLE: device => dispatch(addBLE(device))
})

export default connect(mapStateToProps,mapDispatchToProps)(BLE)