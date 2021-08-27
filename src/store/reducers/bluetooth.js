import { 
    ADD_BLE,
    CHANGED_COLOR,
    CONNECTED_DEVICE,
    CHANGE_STATUS 
} from "../actions/actionTypes"


const initialState = {
    BLEList: [], //An Array of Discovered Devices
    color: '#fff', //the Current Color of the LED strip
    connectedDevice: {}, // the current connected BLE device
    status: 'disconnected' // the status of the BLE connection
  }

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      
        case ADD_BLE:
            if(state.BLEList.some(device => device.id === action.device.id) || !action.device.isConnectable || action.device.name === null){
              return state
            } else {
              const newBLE = [
                    ...state.BLEList,
                    action.device
                  ]
              return {
                BLEList: newBLE,
                color: state.color,
                connectedDevice: state.connectedDevice,
                status: action.status
                }
            }
        case CHANGED_COLOR:
          return {
            BLEList: state.BLEList,
            color: action.newColor,
            connectedDevice: state.connectedDevice,
            status: action.status
          }
        case CONNECTED_DEVICE:
          console.log("Reducer connected device", action);
          return {
            BLEList: state.BLEList,
            color: state.color,
            connectedDevice: action.connectedDevice,
            status: action.status
          };
        case CHANGE_STATUS:
          console.log("change status:", action)
          return {
            BLEList: state.BLEList,
            color: state.color,
            connectedDevice: action.status.connectedDevice,
            status: action.status.status
          }
        default:
          return state
      }
  }

  export default reducer