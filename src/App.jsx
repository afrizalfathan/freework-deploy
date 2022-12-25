import Home from "./components/Home"
import Navigation from "./components/Navigation"
import FooterWeb from "./components/FooterWeb"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Daftar from "./components/Daftar"
import FreelancerWeb from "./components/FreelancerWeb"
import FreelancerDesign from "./components/FreelancerDesign"
import KerjaanWeb from "./components/KerjaanWeb"
import KerjaanDesign from "./components/KerjaanDesign"

function App() {
    return (
        <div className="App-container">
            <Navigation />
            <Routes>
                <Route path="/freework-deploy" element={<Home />} />
                <Route path="/freework-deploy/login" element={<Login />} />
                <Route path="/freework-deploy/daftar" element={<Daftar />} />
                <Route
                    path="/freework-deploy/freelance-web/"
                    element={<FreelancerWeb />}
                />
                <Route
                    path="/freework-deploy/freelance-design/"
                    element={<FreelancerDesign />}
                />
                <Route
                    path="/freework-deploy/freelance-kerjaanWeb/"
                    element={<KerjaanWeb />}
                />
                <Route
                    path="/freework-deploy/freelance-kerjaanDesign/"
                    element={<KerjaanDesign />}
                />
            </Routes>
            <FooterWeb />
        </div>
    )
}

export default App
