import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../login/login"
import Home from "../paginas/home/Home"

function Rotas(props) {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="home" element={<Home news={props.news} setNews={props.setNews}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas