import React,{useEffect,useState} from 'react'
import { Text,View,StyleSheet,Image, FlatList } from 'react-native'

import yelp from '../api/yelp'

const ResultShowScreen=({navigation})=>{
const id=navigation.getParam('id')
const [results,setResults]=useState(null)






const getResults=async (id)=>{
const response=await yelp.get(`/${id}`)
setResults(response.data)
}




useEffect(()=>{getResults(id)},[])

if (!results){
    return null
}

    return (<View>
        <Text>{results.name}</Text>
        <FlatList
        data={results.photos}
        keyExtractor={(photos)=>photos}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>

        }}

        />
        
    </View>)
}

const styles=StyleSheet.create({
    image:{
        height:200,
        width:300
    }
})

export default ResultShowScreen