
import { useEffect , useState } from "react";
import "./search-country.css";

export default function SearchCountries (){ 
    const [countries , setCountries] = useState ([]);
    const [SearchCountry , setSearchCountry] = useState ('');
   
    const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(SearchCountry.toLowerCase()))

    const handleChange =(e)=>{
      setSearchCountry(e.target.value)
    }


    useEffect (()=>{
        fetch ("https://restcountries.com/v3.1/all")
        .then ((res)=>res.json())
        .then ((data)=>setCountries(data))
        .catch ((err)=> console.log ("Error fetching data :",err))
    },[])

return ( 
    <div className="box">
    <div className="inbox">
      <input className="iboxStyle" type="text" placeholder="Search for countries..." value={SearchCountry} onChange={handleChange} />
      </div>
      <div className="containerStyle"> 
     {filteredCountries.map((country)=>{
       return <div key={country.cca3} className="countryCard">
          <img src={country.flags.png}
           alt= {`flag of ${country.name.common}`}
          className="imageStyle"
          />
          <h2>{country.name.common}</h2>
      </div>
  
     })}
  </div>
  </div>
  )
  
}
