import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Main/Home";
import Sun from "./Main/Sun";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/sun`} element={<Sun />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
