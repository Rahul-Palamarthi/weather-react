const Time = ({ name, country }) => {
    const handleDate = () => {
        const months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ];
        const date = new Date();
        const str = date.toString().split(" ");
        const month = date.getMonth();
        const [hour, min] = str[4].split(":");
        return `${str[2]} ${months[month]}, ${hour}:${min}`;
    };

    return (
        <>
            <div className="sun__time">
                <p>
                    {name}, {country}
                </p>
                <p>{handleDate()}</p>
            </div>
        </>
    );
};

export { Time as default };
