import Home from "./components/Home"
import Navigation from "./components/Navigation"
import FooterWeb from "./components/FooterWeb"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Daftar from "./components/Daftar"

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/freework-deploy" element={<Home />} />
                <Route path="/freework-deploy/login" element={<Login />} />
                <Route path="/freework-deploy/daftar" element={<Daftar />} />
            </Routes>
            <FooterWeb />
        </>
    )
}

export default App
