import { useLocation } from "react-router-dom";
import sun_time from "../asserts/Images/sun_time.png";
import Time from "../Time";

const Sun = () => {
    const { state } = useLocation();

    const { data } = state;

    const handleSunTime = (time, type) => {
        const date = new Date(time * 1000);

        if (type === "hour") return date.getHours();
        else if (type === "min")
            return date.getMinutes() > 9
                ? `${date.getMinutes()}`
                : `0${date.getMinutes()}`;
        else return "error";
    };

    return (
        <>
            <section className="sun__container">
                <Time name={data.name} country={data.sys.country} />
                <div className="sun__imgContainer">
                    <img src={sun_time} alt="sun rise and set img" />
                </div>
                <div className="sun__info">
                    <p>
                        <span>sunrise</span>{" "}
                        {handleSunTime(data.sys.sunrise, "hour")}:
                        {handleSunTime(data.sys.sunrise, "min")}
                    </p>
                    <p>
                        <span>sunset</span>{" "}
                        {handleSunTime(data.sys.sunset, "hour")}:
                        {handleSunTime(data.sys.sunset, "min")}
                    </p>
                </div>
            </section>
        </>
    );
};

export { Sun as default };
