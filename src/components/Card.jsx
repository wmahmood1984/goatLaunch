import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Card({uri,id}) {
    const [data,setData] = useState()
    
    useEffect(()=>{
        const abc = async ()=>{
            const _data = await axios.get(uri)
            console.log("uri",_data)
            setData(_data.data)
        }
        abc()

    },[])



  return (data && 
    <Link 
    to={`/details/${id}`}
    >
    <img
    width="100px"
    src={data.image}

    ></img>
    <div>
        <span>name:{data.name}</span>
        <span>Price:{data.description}</span>
    </div>
    </Link>
  )
}
