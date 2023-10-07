import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Navbar2 from './Components/Navbar2';
import {BrowserRouter , Route ,Routes}  from "react-router-dom"
import Signin from './Components/Signin';




function App() {
  return (
    <div className="App" style={{backgroundColor : "#f1f2f4"}}>
      <BrowserRouter>
      <Navbar/>
      <Navbar2/>
      
      <Routes>

      <Route path='/' element = {<Home/>} />
<Route path='/Signin' element = {<Signin/>}/>
      </Routes>
      
      </BrowserRouter>
      
     
  


     
    </div>
  );
}

export default App;
