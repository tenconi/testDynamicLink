import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'


function Alive() {
  const [status, setStatus] = useState([])
  

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/characters/')
      .then((response) => response.json())
      .then((json) => setStatus(json.filter((item) => item.status === status)))
  }, [status])

  //console.log(status)

  return (
    <>
      <div>Alive</div>
      <p>Hacer click en el estado de la CARD</p>
      <div>
        {
          status.map((coso)=>{
            return(
              <>
              <Card/>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Alive