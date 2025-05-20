import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const {name} = useParams()
    const[countryData,setCountryData]=useState({})
    const[isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setCountryData(data[0])
      
    })
    .finally(()=>{
      setIsLoading(false)
    })


  },[name])
  if(isLoading){
    return <p>Loading...</p>
  }
  return <div>
    <h2>{countryData.name.common}</h2>
    <img src={countryData.flags.svg} alt="" />
    <p>
      <b>Capital</b>: {countryData?.capital?.[0]}
    </p>
     <p>
      <b>Region</b>: {countryData?.region}
    </p>
     <p>
      <b>Population</b>: {countryData?.population}
    </p>
  </div>;
};



