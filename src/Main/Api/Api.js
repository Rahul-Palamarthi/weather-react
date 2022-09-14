import { useEffect, useReducer, useRef } from "react";
import axios from "axios";

import { apiKey } from "../apiKey/apikey.js";

const FETCH = {
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
    FAIL: "FAIL",
};
const baseUrl = `http://api.openweathermap.org/data/2.5`;

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH.REQUEST:
            return { ...state, loading: true };
        case FETCH.SUCCESS:
            return { ...state, loading: false, weather: action.payload };
        case FETCH.FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Data = (place) => {
    const [{ loading, weather, error }, dispatch] = useReducer(reducer, {
        loading: true,
        weather: [],
        error: "",
    });
    const effectRan = useRef(true);

    useEffect(() => {
        if (effectRan.current) {
            dispatch({ type: FETCH.REQUEST });

            const url = `${baseUrl}/weather?q=${place}&units=metric&APPID=${apiKey}`;
            const fetchData = async (url) => {
                try {
                    const result = await axios.get(url);
                    dispatch({ type: FETCH.SUCCESS, payload: result.data });
                } catch (err) {
                    dispatch({ type: FETCH.FAIL, payload: err.message });
                }
            };

            fetchData(url);
            return () => (effectRan.current = false);
        }
    }, [place]);
    return { loading, weather, error };
};

export { Data as default };
