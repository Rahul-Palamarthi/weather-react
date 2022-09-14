import Data from "../Api";
import Weather from "../Weather";

const Home = () => {
    const { loading, weather, error } = Data(`Sunnyvale`);

    if (loading) return <div>Loading</div>;
    else if (error) return <div>Error</div>;
    else return <Weather data={weather} />;
};

export { Home as default };
