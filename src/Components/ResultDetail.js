import React from 'react'
import { Text,View,Image,StyleSheet,TouchableOpacity } from 'react-native'


const ResultDetail=({result})=>{
    return <View style={styles.container}><Image style={styles.image} source={{uri:result.image_url}}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>{result.rating} Ratings {result.review_count} Reviews </Text>
    </View>
}

const styles=StyleSheet.create({
    image:{
        height:200,
        width:250,
        
        borderRadius:4
    },
    name:{
        fontWeight:'bold',
        margin:4,
        marginLeft:6
    },
    container:{
        marginLeft:15,
        marginBottom:15
    }
})

export default ResultDetail
