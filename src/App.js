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
        <div className={navClass? "Navigation responsive" : "Navigation "}>
          <div className="Title">
            TITLE
            
          </div>
          <div className="Action">
              <a className="Link" href="#" onClick={()=>{setData("tutorials")}}>Tutorials</a>
              <a className="Link" href="#" onClick={()=>{setData("add")}}>Add Tutorials</a>

              <button class="btn" type='submit' onClick={setClass}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
 
              
          </div>
        </div>
        {/* end of navigation */}

        
        <div className="Content">
          {navClass? "Navigation responsive" : "Navigation "}
          {setBody()}

        </div>
    </div>
  );
}

export default App;
