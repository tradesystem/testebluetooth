/**
 * @format
 */

 //import 'react-native-gesture-handler'
 import React from 'react'
 import {AppRegistry} from 'react-native'
 import {Provider} from 'react-redux'
 import Navigator from './src/navigator'
 import {name as appName} from './app.json'
 
 import storeConfig from './src/store/storeConfig'
 

 const store = storeConfig()
 const Redux = () => (
     <Provider store={store}>
         <Navigator />
     </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => Redux)

 export default Redux
