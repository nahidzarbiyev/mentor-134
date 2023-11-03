import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "../card"
import './cards.css'
const Cards = () => {
    const [catData, setCatData] = useState([])
    useEffect(()=>{
axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
.then(res=>setCatData(res.data))
    },[])
    console.log(catData);
  return (
  <div className="cards">
    {  catData.map((cat,i)=><Card key={i} cat={cat}/>)}
  </div>
  )
}

export default Cards