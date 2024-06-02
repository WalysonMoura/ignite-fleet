import { Home } from "@/screens/Home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const {Navigator,Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return(
        <Navigator>
            <Screen name="home" component={Home}/>
        </Navigator>
    )
}