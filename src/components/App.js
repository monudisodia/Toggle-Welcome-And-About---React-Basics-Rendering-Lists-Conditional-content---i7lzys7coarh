import React from "react";
import "../styles/App.css";
import { useState } from "react";

const App = () => {
  const [div,setDiv] = useState(true);
  const onclick = () =>{
    if(div === true){
      setDiv(false)
    }else{
      setDiv(true);
    }
  }
  return (
    <div id="main">
      {div === true ?
      (<div id="welcome-div">
        <h1>Welcome to Newton School!!</h1>
      </div>):
      (<div id="about-div">
        <h1>
          Newton School is a neo-university providing highly immersive tech
          learning to millions of students, to tap into new-age tech
          opportunities.
        </h1>
      </div>)}
      <button id="toggle" onClick={onclick} >Toggle</button>
    </div>
  );
};

export default App;
