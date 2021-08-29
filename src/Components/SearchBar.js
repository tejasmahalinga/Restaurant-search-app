import React from 'react'
import { Text,View,StyleSheet,TextInput } from 'react-native'
import {FontAwesome} from "@expo/vector-icons"

const SearchBar=({term,onChange,onSubmission})=>{
   return <View style={styles.background}>
       <FontAwesome name="search" style={styles.iconStyle} />
       <TextInput style={styles.inputStyle} 
       placeholder="Search" 
       autoCapitalize='none'
       autoCorrect={false}
       value={term} 
       onChangeText={(changedTerm)=>onChange(changedTerm)}
       onEndEditing={onSubmission}/>
       </View>

}

const styles=StyleSheet.create({
background:{
    backgroundColor:'#ffff',
    marginVertical:15,
    height:50,
    borderRadius:5,
    marginHorizontal:10,
    flexDirection:"row"
},
inputStyle:{
  fontSize:18,
   flex:1
},
iconStyle:{
  fontSize:35,
  marginHorizontal:15,
  alignSelf:'center'
}
})

export default SearchBar