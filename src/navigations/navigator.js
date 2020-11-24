import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
/*import Login from '../screens/CustomerLogin';
import Register from '../screens/CustomerRegister';
import Login from '../screens/ShopownerLogin';
import Register from '../screens/ShopownerRegister';*/
import DeliveryboyLogin from '../screens/DeliveryboyLogin';
/*import Register from '../screens/DeliveryboyRegister';*/
import Front from '../screens/Frontpage';




const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    DeliveryboyLogin:{screen: DeliveryboyLogin},
    /*Register:{screen:Register},*/
    Front:{screen:Front}
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);