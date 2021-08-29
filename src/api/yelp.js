import axios from "axios";


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'bearer <Enter your Yelp API KEY HERE>'

    }
})