import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import Card from '../components/Card/Card.jsx';

function Status() {
  const [status, setStatus]= useState([])

  const estado = useParams()
  //levanto el estado de donde se clickea --- OK

  useEffect(()=>{
    axios(`https://breakingbadapi.com/api/characters/${estado.st}`)
    .then((res)=>setStatus(res.data))
  },[estado.st])

console.log('status: '+ estado)

const comoTa = status.filter( x => estado.st = status.status)
console.log('estado: '+ comoTa)  //no levanta filtro :(
  
  return (
    <>
    <div className='container back'>
    <Link to="/" className='alink'>&lt;-- Volver</Link>
    </div>

    <div className="container">
        <p>status</p> {`${estado.st}`}    
      </div>
    
    <div>
      {
        status.map((onda)=>{
          return(
            <div>{onda.name}
            </div>
          )
        })
      }

    </div>
        
    </>
  )
}

export default Status