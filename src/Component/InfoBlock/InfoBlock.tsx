import city from '../../assets/city.png';
import earth from '../../assets/earth.png';
import population from '../../assets/population.png';

interface InfoBlockInterface{
    disc:string;
    cityName:string;
    country:string;
    weather:number;
    pop:number | null;
    icon:string;
    theme:string
}

export default function InfoBlock({disc, cityName, country, weather,pop,icon, theme}:InfoBlockInterface){
    return (
        <div className={`container__info ${theme}`}>
            <div className="weather info-item">
                <div className="weather__icon info-icon">
                    <img src={icon} alt=""/>
                </div>
                <div className={`weather__discription item-discr ${theme}`} title='weather in city'>
                    <p>{disc}, {weather} C </p>
                </div>
            </div>
                <div className="city info-item">
                    <div className="city__icon info-icon">
                        <img src={city} alt="" />
                    </div>
                    <div className={`city__discription item-discr ${theme}`} title='city name'>
                        <p>{cityName}</p>
                    </div>
                </div>
                <div className="country info-item">
                    <div className="country__icon info-icon">
                        <img src={earth} alt="" />
                    </div>
                    <div className={`country__discription item-discr ${theme}`} title='country name'>
                        <p>{country}</p>
                    </div>
                </div>
                <div className="population info-item">
                    <div className="population__icon info-icon">
                        <img src={population} alt="" />
                    </div>
                    <div className={`population__discription item-discr ${theme}`}  title='population in the country'>
                        <p>{pop !== null ? pop : 'Loading...'}</p>
                    </div> 
                </div>
            </div>
    )
}