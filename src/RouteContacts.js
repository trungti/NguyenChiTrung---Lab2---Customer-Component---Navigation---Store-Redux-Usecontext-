import {createStackNavigator} from"@react-navigation/stack";
const Stack=createStackNavigator();
const RouterContacts=()=>
{
return(
<Stack.Navigator initialRouteName="Contacts">
    <Stack.Screen name="Contacts" component={Contacts}/>
    <Stack.Screen name="Profile" component={Profile}/>
</Stack.Navigator>
)
}
export default RouterContacts;