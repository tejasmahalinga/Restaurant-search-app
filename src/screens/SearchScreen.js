import React,{useState} from 'react'
import { Text,View,StyleSheet, ScrollView } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../Components/SearchBar'
import ResultList from '../Components/ResultList'



const SearchScreen=()=>{
    const [term,setTerm]=useState('')
    const [yelpApi,results,errorMessage]=useResults()

    const PriceFilter=(price)=>{
        return results.filter(result=>{
         return result.price===price
        })
    }
    
    

   return <>
       <SearchBar term={term}
        onChange={(changedTerm)=>setTerm(changedTerm)} 
        onSubmission={()=>yelpApi(term)}/>
       
       {errorMessage?<Text>{errorMessage}</Text>:null}
       <ScrollView><ResultList  results={PriceFilter('$')} title='Cost Effective'/>
       <ResultList  results={PriceFilter('$$')} title='Bit Pricy'/>
       <ResultList  results={PriceFilter('$$$')} title='Luxury'/></ScrollView>
       
       </>
       

}

const styles=StyleSheet.create({

})

export default SearchScreen