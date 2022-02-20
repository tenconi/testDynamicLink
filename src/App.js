import './App.css';
//import Card from './components/Card/Card.jsx';
import Nav from './components/Nav/Nav.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Views
import Home from './views/Home.jsx'
import Alive from './views/Alive.jsx'
import Deceased from './views/Deceased.jsx'
import Unknow from './views/Unknows.jsx'
import CardDetail from './views/CardDetail.jsx'
import Status from './views/Status.jsx'


function App() {
  return (
    <div className="App">

    <Router>    
        <Nav/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<CardDetail/>}/>

          <Route path="/status/:st" element={<Status/>} />

          <Route path="/Alive" element={<Alive/>}/>
          <Route path="/deceased" element={<Deceased/>}/>
          <Route path="/unknow" element={<Unknow/>}/>
          

        </Routes>
    </Router>

    </div>
  );
}

export default App;
