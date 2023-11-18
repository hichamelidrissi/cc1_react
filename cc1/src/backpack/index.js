// import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom' 
import ImgsSlides from "./AllTp/ImgsSlides"
import TodoList from './AllTp/ToDoList'
import Api from './AllTp/Api1'
import WelcomePage from './AllTp/WelcomePage'
import Calc from './AllTp/Calc';
import sun from "./AllTp/images/sun.png"
import moon from "./AllTp/images/moon.png"
import { useState } from 'react'
import "./AllTp/bootstrap.min.css";

function Cc1() {
  const [lng, setLng] = useState("EN");
  const style = document.body.style;
  const darkModeStyle = {
    width:"30px",
    height:"30px",
    borderRadius:"50%",
    backgroundColor:"white",
    margin:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer"  
  };
  return ( 
    <>
      <div style={{width:"100%", height:"70px",fontSize:"large", fontWeight:"700", display:"flex", justifyContent:"center", alignItems:"center", position:"fixed", left:"0", zIndex:'1'}}>
        <label htmlFor="darkMode" style={darkModeStyle}><img src={sun} alt=""/></label>
        <input type="checkbox" id='darkMode' style={{display:"none"}}
        onChange={
            (e)=>{
                if (e.target.checked) {
                    document.body.style.background = `linear-gradient(to right, black, #333, #666, #999, #ccc, #eee, white)`; 
                    document.body.style.backgroundRepeat = `no-repeat`;
                    e.target.previousElementSibling.firstElementChild.src = moon;
                    e.target.previousElementSibling.style.backgroundColor = "#696969";
                }else{
                    document.body.style = style;
                    e.target.previousElementSibling.firstElementChild.src = sun;
                    e.target.previousElementSibling.style.backgroundColor = "#fff";
                }
            }
        }
       />
          <select style={{borderRadius:"4px", marginLeft:"10px"}} onChange={e=>setLng(e.target.value)}>
              <option value="EN">EN</option>
              <option value="AR">AR</option>
              <option value="FR">FR</option>
          </select>
       </div>
      <div className="App darkMode" style={{width:"100%", minHeight:`${window.screen.height}px`, display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center"}}>
      <BrowserRouter basename='cc1_react'>
        <Routes>
            <Route path="/" element={<WelcomePage langue = {lng}/>} />
            <Route path='/calculator' element={<Calc  />} />  
            <Route path='/Slider' element={<ImgsSlides />} />
            <Route path='/todo' element={<TodoList />} />
            <Route path='/API' element={<Api />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default Cc1;