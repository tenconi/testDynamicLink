import React from 'react';
import '../Styles/Styles.css';
import { Link } from 'react-router-dom';


const Nav=()=> {
  
  
  return (
    <div>
        <ul className='navegador'>
            <Link to="/" className='linkNav'>home</Link>
            <Link to="/Alive" className='linkNav'>vivos</Link>
            <Link to="/deceased" className='linkNav'>muertos</Link>
            <Link to="/unknow" className='linkNav'>desconocidos</Link>
        </ul>
    </div>
  )
}

export default Nav