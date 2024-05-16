import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios';
import './temp.css'
function Temp() {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Vidisha");
  const [min ,setMin]=useState(null);
  const [max ,setMax]=useState(null);

 
  useEffect(() => {

    var api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=113e0a98df02f708734adf41421ac650`

    axios.get(api).then((res) => {

      setCity(res.data.main.temp);
      console.log(res.data.main);
      setMin(res.data.main.temp_min);
      setMax(res.data.main.temp_max);
     

    }).catch((err) => {
      console.log(err);
    })
  }, [search])
  return (
    <>
      <div className="temp">
        <div>
          <h1>Weather Check</h1>
          <input type='search' className='inputfield' onChange={(e) => {
            setSearch(e.target.value)}} />
        </div>
        {!city ? (
          <p>No data found</p>
        ) :
          (
            
              <div className='info'>
                <h2>{search}</h2>
                <h2>{city}&deg;C</h2>
              <b><span>Min_Temp:-{min}&deg;C</span>&nbsp;&nbsp;&nbsp;<span>Max_Temp:-{max}&deg;C</span></b>
                
                
               
              </div>
            
          )
        }
        </div>

 


    </>
    )
}
export default Temp;