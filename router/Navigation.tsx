import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../screen/Home'
import {PostDetails}  from '../screen/PostDetails'
const stack=createStackNavigator();
const Navigation=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Home"
                    component={Home}
                    options={
                        {
                            title:"News Posts",
                            headerStyle:{
                                backgroundColor:"grey"
                            }
                        }
                    }
                />
                 <stack.Screen
                    name="PostDetails"
                    component={PostDetails}
                    options={
                        {
                            title:" PostDetails",
                            headerStyle:{
                                backgroundColor:"grey"
                            }
                        }
                    }
                />
            </stack.Navigator>
            
               
            
        </NavigationContainer>
    )
}
export default Navigation;