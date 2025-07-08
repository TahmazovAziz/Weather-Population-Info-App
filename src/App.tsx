import { useState } from 'react'
import Input from './Component/Input/Input'
import Button from './Component/Button/Button'
import InfoBlock from './Component/InfoBlock/InfoBlock'
import axios from 'axios'

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
function App() {
  const weatherApiKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;
  const populationApiKey = import.meta.env.VITE_API_NINJAS_KEY;
  const [value, setValue]  = useState('')
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(null)
  const [populationData, setPopulationData] = useState<number | null>(null)
  const WeatherUrl = `https://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${value}`
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function ButtonClick(){
    setIsLoading(true)
    setError(null)
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
  return (
    <>
    <div className="container">
      <h1>Weather & Population Info</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="container__header">
      <Input value={value} onChangeInput={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      ButtonClick();
    }
  }}/>
      <Button Click={ButtonClick}>{isLoading ? 'Загрузка...' : 'Search'}</Button>
      </div>
      <div className="container__footer">
        
        {weatherData?.current && weatherData?.location && (
          <InfoBlock 
            disc={weatherData.current.weather_descriptions[0]} 
            cityName={weatherData.location.name} 
            country={weatherData.location.country} 
            weather={weatherData.current.temperature} 
            pop={populationData}
            icon={weatherData.current.weather_icons[0]}
          />
        )}
      </div>
    </div>
    </>
  )
}
export default App
