import React, { useEffect,useState } from 'react'
import axios from 'axios'
import '../Styles/Styles.css'
import Card from '../Card/Card.jsx'
import {Link} from 'react-router-dom'

function CardContainer() {
    const [loco, setLoco] = useState([])

    useEffect(()=>{
        axios('https://breakingbadapi.com/api/characters')
        .then((res)=>setLoco(res.data))
    },[])
    

  return (
    <>
        {loco.map((tipo)=>
            <div key={tipo.char_id}>
                <Link to={`/detail/${tipo.char_id}`} className="linked">
                <Card mando={tipo}/>
                </Link>
            </div>
        )}
    
    </>
  )
}

export default CardContainer