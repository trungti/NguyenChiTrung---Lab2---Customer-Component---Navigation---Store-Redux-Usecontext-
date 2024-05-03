import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./Favorites";

const Drawer=createDrawerNavigator()
const Mydrawer=()=>
{
    return(
        <Drawer.Navigator
        >
            <Drawer.Screen name="contacts" component={Contacts}/>
            <Drawer.Screen name="favorites" component={Favorites}/>
            <Drawer.Screen name="users" component={Favorites}/>
        </Drawer.Navigator>
    )
}