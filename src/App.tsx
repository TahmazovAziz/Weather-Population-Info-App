import { useEffect, useState } from 'react';
import Input from './Component/Input/Input';
import Button from './Component/Button/Button';
import InfoBlock from './Component/InfoBlock/InfoBlock';
import useData from './hooks/useData';
import dark from './assets/theme-dark.png';
import light from './assets/theme-light.png'
function App() {
  const [value, setValue]  = useState('')
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  const {weatherData, populationData, isLoading, fetch, error} = useData()

  function ButtonClick(){
    fetch(value)
  }
  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
    
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme]);
  return (
    <>
    <div className="container">
      <div className="container__header">
        <h1 className={theme}>Weather & Population Info</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="container__search">
        <Input value={value} onChangeInput={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          ButtonClick();
        }
      }}/>
        <Button Click={ButtonClick}>{isLoading ? 'Загрузка...' : 'Search'}</Button>
        <Button className={'icon-button'} Click={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
          <img src={theme === 'dark' ? dark : light} alt="" />
        </Button>
        </div>
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
            theme={theme}
          />
        )}
      </div>
    </div>
    </>
  )
}
export default App
