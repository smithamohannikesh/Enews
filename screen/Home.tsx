import React, { useEffect, useState } from 'react'
import {View,Text,FlatList,TouchableOpacity,StyleSheet, ActivityIndicator} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {getAllposts} from '../redux/action/action'
export const  Home=(Props:any)=>{
    const dispatch=useDispatch();
    const[page,setPage]=useState(0)
    const [loading,setLoading]=useState(false)
    const postNews=useSelector((state:any)=>state.app.post)
    //console.log("homee")
    //console.log(postNews);
    useEffect(()=>{
        getNewpost();
    },[dispatch,page])
    useEffect(()=>{
        const interval=setInterval(async()=>{
            setPage(page+1)
        },10000)
        return ()=>{
            clearInterval(interval)
        }
    },[page])
    const getNewpost=()=>{
        setLoading(true)
        dispatch(getAllposts(page))
        setLoading(false)
    }
    const showDetails=(selectedPost:any)=>{
        Props.navigation.navigate('PostDetails',{selectedPost:selectedPost})
    }
    return(
        <View>
            <FlatList
                data={postNews}
                keyExtractor={(item)=>item.key}
                renderItem={itemData=>(
                    <TouchableOpacity style={styles.list} onPress={()=>{showDetails(itemData.item)}}>
                        <Text style={styles.content}>{itemData.item.title}</Text>
                        <Text style={styles.content}>{itemData.item.author}</Text>
                        <Text style={styles.content}>{itemData.item.created_at}</Text>
                        
                    </TouchableOpacity>
                )}
                onEndReached={()=>{setPage(page+1)}}
                onEndReachedThreshold={.5}
                numColumns={1}
            />
            {loading&& <ActivityIndicator  size="large" color="blue"/>}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
        backgroundColor:"grey",
        margin:5,
        padding:5,
        fontSize:0
    },
    content:{
        fontSize:20
    }
  });
  