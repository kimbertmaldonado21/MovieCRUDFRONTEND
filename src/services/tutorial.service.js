import axios from 'axios'

const instance = axios.create({
    baseURL : "http://localhost:8080/",
    headers :{
        "Content-type" : "application/json"
    }
});

function POST(url,body={}){
    // console.log(url);
    // console.log(body.title);
    // console.log(body.description);
    // const request = "qwe";
    // const request = instance.post(url, body,{
    //     headers :{
    //     "Access-Token": "accessToken",
    //     "Refresh-Token": "refreshToken",
    //     }
    // })
    const source= "axios.CancelToken.source()";

    const request = axios.post('http://localhost:8080/login')

    return{
        request,
        source
    }
    

    
    
}

export {POST}