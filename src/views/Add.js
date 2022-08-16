import React,{useState} from 'react'

const Add = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className='Add'>

      <div className='form-group col-sm-5'>

        <h3 className='form-title mb-5'>
          Tutorial
        </h3>

        <h4 className='form-title mb-2'>
          Title
        </h4>

        <input type={"text"} className="form-control mb-5" placeholder='Title' 
        onChange={(event)=>{
          setTitle(event.target.value)
          console.log(event.target.value)
        }} 
        
        />
        
        <h4 className='form-title mb-2'>
          Description
        </h4>

        <input type={"text"} className="form-control mb-5" placeholder='Description'
        onChange={(event)=>{
          setDescription(event.target.value)
          console.log(event.target.value)
        }} 
        />

        <div className='row ButtonAction'>
          <div className='col-4'>
            <button className='btn btn-info'>
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
  )
}

export default Add