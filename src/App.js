import Add from './views/Add'
import Tutorial from './views/Tutorial'
import React, {useState} from 'react';


function App() {

  const [content, setContent] = useState("");
  const [navClass, setNavClass] = useState(false);

  const setData = (e) =>{

    setContent(e);
    console.log(e);

  }
  const setBody = () =>{
    if(content==="tutorials"){
      return <Tutorial />
    }else{
      return  <Add />
    }
  }

  const setClass = () =>{
    setNavClass(!navClass)
  }

  return (
    <div className="App">
        {/* <div className={navClass? "Navigation responsive" : "Navigation "}>
          TITLE 
            <a className="Link" href="#" onClick={()=>{setData("tutorials")}}>Tutorials</a>
            <a className="Link" href="#" onClick={()=>{setData("add")}}>Add Tutorials</a>

            <button className="btn" type='submit' onClick={setClass}>
              <ion-icon name="menu-outline"></ion-icon>
            </button>
        </div> */}
        <div className={navClass? "topnav responsive" : "topnav"} id="myTopnav">
            <a className="Link" href="#" onClick={()=>{setData("tutorials")}}>Tutorials</a>
            <a className="Link" href="#" onClick={()=>{setData("add")}}>Add Tutorials</a>
            <button className="btn" type='submit' onClick={setClass}>
                <ion-icon name="menu-outline"></ion-icon>
            </button>
        </div>


        
        <div className="Content">
          {/* {navClass? "Navigation responsive" : "Navigation "} */}
          {setBody()}

        </div>
    </div>
  );
}

export default App;
