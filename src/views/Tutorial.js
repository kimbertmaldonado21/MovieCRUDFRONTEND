import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Tutorial = () => {

  const [title, setTitle] = useState("")
  const [titlelist, setTitlelist] = useState([])

  const [newdescription, setnewdescription] = useState("")




  useEffect(()=>{
    axios.get('http://localhost:8080/api/get')
    .then((response)=>{

      setTitlelist(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  
  const DeleteMovie = (movieName) =>{
    axios.delete(`http://localhost:8080/api/delete/${movieName}`)
    .then((response)=>{

    })
    .catch((error)=>{
      alert(error);
    })

  }

  const UpdateMovie = (movieName,movieDescription) =>{
    axios.put(`http://localhost:8080/api/update`,{
      movieName,
      movieDescription
    })
    .then((response)=>{
      alert(response.data)
    })
    .catch((error)=>{
      alert(error);
    })
  }

  const searchTitle = (movieName) =>{
    axios.get(`http://localhost:8080/api/get/${movieName}`)
    .then((response)=>{
      if(response.data[0]!==undefined){
        alert(response.data[0].title,response.data[0].description)
        console.log(response.data[0])
      }else{
        alert("No data")
      }
    })
    .catch((error)=>{
      alert(error)
    })
  }

  return (
    <div>
      <div className='row leftDiv'>
        <div className='col-sm-5 ' >

          <div className='input-group mb-3'>
              <input type={"text"} className="form-control" placeholder='Search by Title' onChange={(event)=>{
                setTitle(event.target.value)
              }}/>
              <div className='input-group-append'>
                <button className='btn btn-dark' onClick={()=>{
                  searchTitle(title)
                }}>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
          </div>

          <div className='card card-success'>
            <div className='card-header Tutorial_list'>
              Tutorial list
            </div>
            <div className='card-body'>
              <table className='table'>
                <thead className='text-center'>
                  <tr>
                    <th>MOVIE</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody className='text-center'>
                {titlelist.map((val)=>{
                  return <tr>
                    <div className='card card-success mb-4'>
                      <div className='card-header'>
                        <h3 className='card-title'>{val.title}</h3>
                      </div>

                      <div className='card-body'>
                        <h4>{val.description}</h4>
                        <input type={"text"} className='form-control form-control-border' placeholder="Edit" onChange={(e)=>{
                          setnewdescription(e.target.value)
                        }}
                        /><br />
                        <button type='submit' className='btn btn-warning m-2' onClick={()=>{
                          UpdateMovie(val.title,newdescription)
                        }}>Update</button>
                        <button type='submit' className='btn btn-danger' onClick={()=>{
                          DeleteMovie(val.title)
                        }}>Delete</button>
                      </div>

                      
                      
                    </div>
                    
                    
                  </tr>
                  
                  
                })}
                </tbody>
              </table>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Tutorial