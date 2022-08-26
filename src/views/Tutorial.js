import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Tutorial = () => {

  const [title, setTitle] = useState("")
  const [titlelist, setTitlelist] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/api/get')
    .then((response)=>{

      setTitlelist(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  

  return (
    <div>
      <div className='row leftDiv'>
        <div className='col-sm-5'>

        <div className='input-group mb-3'>
            <input type={"text"} className="form-control" placeholder='Search by Title' onChange={(event)=>{
              setTitle(event.target.value)
              console.log(event.target.value)
            }}/>
            <div className='input-group-append'>
              <button className='btn btn-dark'>
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
        </div>

        <div className='card'>
          <div className='card-header Tutorial_list'>
            Tutorial list
          </div>
          <div className='card-body'>
            <table className='table'>
              <thead className='text-center'>
                <tr>
                  <th>TITLE</th>
                </tr>
              </thead>

              <tbody className='text-center'>
              {titlelist.map((val)=>{
                return <tr>
                  <td><h3>{val.title}</h3></td>
                </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>
          
      </div>

        <div className='col-sm-5 ShowMovie'>
          <div className='card'>
            <div className='card-header'>
              Click a Tutorial
            </div>
            <div className='card-body'>
              BODY
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutorial