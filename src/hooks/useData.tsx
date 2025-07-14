import  { useState } from "react"
import axios from "axios"
interface WeatherDataInterface{
    current?:{
      weather_descriptions:string[]
      temperature:number
      weather_icons:string[]
    }
    location?:{
      name:string
      country:string
    }
}

export default function useData(){
  const weatherApiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;
  const populationApiKey = import.meta.env.VITE_API_NINJAS_KEY;
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(null)
  const [populationData, setPopulationData] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const fetch = (city:string) => {
      setIsLoading(true)
      setError(null)
      const WeatherUrl = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${city}`
        try{
        axios.get(WeatherUrl).then((res)=>{
            setWeatherData(res.data)
            if(res.data.location){
            const PopulationUrl = `https://api.api-ninjas.com/v1/population?country=${res.data.location.country}`
            axios.get(PopulationUrl,{  headers: {'X-Api-Key': populationApiKey}}).then((pop)=>{setPopulationData(pop.data.population_forecast[0].population)})
            }
        })
        }
        catch(er){
            setError('Error retrieving data. Try again.')
            console.log(er)
        }finally {
            setIsLoading(false)
        }
  }
  return {weatherData, populationData, isLoading, fetch, error }
}