import React, {useState, useEffect} from 'react';
import '../components/Styles/Styles.css'
import { Link, useParams } from 'react-router-dom';
//El "Link Dinámico" que genereé en el componente "CardContainer"
import axios from 'axios'

const CardDetail=()=> {
  const [locoSolo, setLocoSolo] = useState([])

  const numID = useParams()
  //console.log(numID.id)
  /* Con "useParams" levanta el parámetro ID que redirigí anteriormente y de manera dinámica a esta view*/
  
  useEffect(()=>{
    axios(`https://breakingbadapi.com/api/characters/${numID.id}`)
    .then((res)=>setLocoSolo(res.data))
  },[numID.id])

  //console.log(locoSolo)
  
  /* 
  1- En el componente "CardContainer" genero el "Link dinámico" dirigiendolo a esta "View" de manera dinámica.
  2- En el esta view "CardDetail" (donde muestro el detalle de cada objeto por separado):
  2a- Levanto el parámetro que me da el dinamismo mediante "useParams"
  2b- Vuelvo a realizar una petición a la Api con este prámetro.
  2c- Mapeo nuevamente.
  */

  return (
    <>
    <div className='container back'>
    <Link to="/" className='alink'>&lt;-- Volver</Link>
    </div>

    <div className='container'>
    {locoSolo.map((loquito)=>{
    return(
      <>
        <div className='detailContainer'>
          <div className='detailContainer__img'>
            <img src={loquito.img} alt="img"/>
          </div>

          <div className='detailContainer__info'>
            <h2>{loquito.nickname}</h2>
            <h3>{loquito.name}</h3>
            <h4>{loquito.status}</h4>
            <p>{loquito.birthday}</p>
            <p>{loquito.occupation}</p>
          </div>

        </div>
      </>
      )}      
      )
    }
      
    </div>
    </>
  )
}

export default CardDetail