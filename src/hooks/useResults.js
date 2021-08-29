import { useState,useEffect } from "react";
import yelp from '../api/yelp'

export default ()=>{
    const [search,setSearch] =useState([])
    const [errorMessage,setErrorMessage]=useState('')

    const yelpApi=async (searchTerm)=>{

        try { const response=await yelp.get('/search',{
             params:{
                 limit:50,
                 term:searchTerm,
                 location:'san jose'
             }
         })
         setSearch(response.data.businesses)   
    }   catch(err) {
      setErrorMessage('Something went wrong')
    }
}


useEffect(()=>{yelpApi('biriyani')},[])    

return [yelpApi,search,errorMessage]
}

