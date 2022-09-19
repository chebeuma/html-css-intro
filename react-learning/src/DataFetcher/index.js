import React ,{useEffect} from 'react'
import axios from 'axios'
const DataFetcher =()=>{
    useEffect(()=>{
       console.log('step-1: data container mounting,running useeffect to fetch data')
        
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    // .then(result=>{
    //     console.log('step-3: unsucessfully fetched data',result.data)
    // })
    // .catch(error =>console.log('api called failed',error))

    async function fetchData(){
        try{
            const response=axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            console.log('step-3:response has been received',response)
        }
        catch(error){
            console.log(error)
            }

        }
          fetchData()

        console.log('step 2: writing fro data to be returned')
        
        return ()=>{
            console.log('FINAL step:data container about to unmount,cleaning up')

        }
    },[])
   
    return (
        <div>DataFetcher</div>
    )
}
export default DataFetcher