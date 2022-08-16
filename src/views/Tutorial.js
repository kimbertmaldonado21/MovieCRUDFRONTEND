import React,{useState} from 'react'

const Tutorial = () => {
  const titles = [
    {id:1, title:"TITLE1"},
    {id:2, title:"TITLE2"},
    {id:3, title:"TITLE3"},

  ]
  const [title, setTitle] = useState("")



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

              <tbody>
                {titles.map((title)=>{
                  <tr>
                    <td key={title.id}> {title.title} </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
          
      </div>

        <div className='col-sm-5'>
          Click a Tutorial
        </div>
      </div>
    </div>
  )
}

export default Tutorial