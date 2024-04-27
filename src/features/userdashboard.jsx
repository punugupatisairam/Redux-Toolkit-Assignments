import React, { useEffect } from 'react'
import { useGetAllusersQuery } from '../services/usersdataApi'

function Userdashboard() {
    const [newdata,setNewdata] = React.useState() 
   const {isLoading, data}= useGetAllusersQuery()
   useEffect(()=>{
    if(isLoading&&data){
        setNewdata((prevdata)=>[...prevdata,...data])
    }
   },[isLoading,data]) 
  return (
    <div>
        <div>
            {
                newdata?.map((udata)=>{
                    console.log(newdata);
                    return <h1>{udata}</h1>
                })
            }
        </div>
    </div>
  )
}

export default Userdashboard