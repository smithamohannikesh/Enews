import React from "react"
import {View,Text} from 'react-native'
export const PostDetails=(Props:any)=>{
    //console.log(Props)
    const details=Props.route.params.selectedPost;
    return(
        <View>
            <Text>{JSON.stringify(details,null,10)}</Text>
        </View>
    )
}
