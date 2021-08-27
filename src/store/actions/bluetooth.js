import {
    ADD_BLE,
    CHANGED_COLOR,
    CONNECTED_DEVICE,
    CHANGE_STATUS
} from './actionTypes'

export const addBLE = device => {
    return {
        type: ADD_BLE,
        payload: device
    }
}

export const changedColor = color => {
    return {
        type: CHANGED_COLOR,
        payload: color
    }
}

export const connectedDevice = device => {
    return {
        type: CONNECTED_DEVICE,
        payload: device
    }
}

export const changeStatus = (status) => {
    return { 
        type: CHANGE_STATUS,
        status: status
    }
}