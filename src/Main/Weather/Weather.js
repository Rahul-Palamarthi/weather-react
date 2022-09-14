import { Link } from "react-router-dom";
import Time from "../Time";
import bg_grey from "../asserts/Images/bg-grey.png";

const Weather = ({ data }) => {
    const handleWeatherImg = () => {
        return null;
    };

    return (
        <>
            <section className="weather__container">
                <Time name={data.name} country={data.sys.country} />

                <div className="weather__data">
                    <div className="weather__info">
                        <p className="weather__temp">
                            23 <span>*C</span>
                        </p>
                        <p className="weather__day">Day 32*</p>
                        <p>Night 21*</p>
                        <p>Fells like 38*</p>
                    </div>
                    <div className="weather__imgContainer">
                        <img src={bg_grey} alt="bg grey" />
                        <img
                            className="weatherImg"
                            src={handleWeatherImg()}
                            alt="weather img"
                        />
                        <p className="weather__descrip">Showers</p>
                    </div>
                </div>

                <Link to={`/sun`} state={{ data: data }}>
                    Sun
                </Link>
            </section>
        </>
    );
};

export default Weather;
