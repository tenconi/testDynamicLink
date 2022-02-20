import React from 'react'
import '../Styles/Styles.css'
import { Link } from 'react-router-dom'

const Card=({mando})=> {
  return (
    <div className='card'>
      <div key={mando.char_id}>
        <div className='card__img'>
          <img src={mando.img} alt='pic' />
        </div>        

        <div className="card__info">
        <h2>{mando.nickname}</h2>
        <h3>{mando.name}</h3>
        <hr/>
        <p>{mando.occupation}</p>
        </div>
        
        <Link to={`/status/${mando.status}`} className="card__estado">
        <p className='card__estado--legend'>STATUS:</p> {mando.status}
        </Link>
        </div>
    </div>
  )
}

export default Card