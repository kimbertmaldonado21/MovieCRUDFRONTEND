import React,{useState} from 'react'

// axios
import axios from 'axios'
import {POST} from '../services/tutorial.service'

const Add = () => {

  const [submitted, setIsSubmitted ] = useState(false);

  const [title, setTitle ] = useState("")
  const [description, setDescription ] = useState("")

  const onChangeTitle = (e)=>{
    setTitle(e.target.value)
    
  }
  const OnchangeDescription = (e)=>{
    setDescription(e.target.value)
    
  }

  const saveTutorial= async(e) =>{
    e.preventDefault();
    const newtitle =  title;
    const newdescription = description;

    axios.post('http://localhost:8080/api/add',{
      newtitle,
      newdescription
    })
    .then((response)=>{
      alert("Success Adding")
      setIsSubmitted(response.data)
    })
    .catch((err)=>{
      alert(err)
    })
  }

  const newTutorial=()=>{
    
    setIsSubmitted(!submitted)
  }

  return(
    <>
    {submitted? (
      <div>
          <h4> YOU submitted successfully</h4>
          <button className='btn btn-info' onClick={newTutorial}>ADD NEW</button>
      </div>
    )
    :(
      <div>

        <div className='Add'>

          <div className='form-group col-sm-5'>

            <h3 className='form-title mb-5'>
              Tutorial
            </h3>

            <h4 className='form-title mb-2'>
              Title
            </h4>

            <input type={"text"} className="form-control mb-5" placeholder='Title' 
            onChange={onChangeTitle} 
            
            />
            
            <h4 className='form-title mb-2'>
              Description
            </h4>

            <input type={"text"} className="form-control mb-5" placeholder='Description'
            onChange={OnchangeDescription} 
            />

            <div className='row ButtonAction'>
              <div className='col-4'>
                <button className='btn btn-info' onClick={saveTutorial}>
                  ADD
                </button>
              </div>
              <div className='col-4'>
                <button className='btn btn-danger'>
                  DELETE
                </button>
              </div>
              <div className='col-4'>
                <button className='btn btn-warning'>
                  UPDATE
                </button>
              </div>
            </div>

          </div>

          </div>
      </div>
    )}
    </>
  )
}

export default Add