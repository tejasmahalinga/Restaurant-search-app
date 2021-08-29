import React from 'react'
import { View,Text,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultList=({title, results, navigation})=>{
    if(!results.length){
        return null
    }
    
    return <View><Text style={styles.titleStyle}>{title}</Text>
    
   <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={result=>result.id}
    renderItem={({item})=>{return (
    <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id}) }>
    <ResultDetail result={item}/>
    </TouchableOpacity>)

}}
   /></View>
}

const styles=StyleSheet.create({
    titleStyle:{
        fontSize:19,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
})

export default withNavigation(ResultList)