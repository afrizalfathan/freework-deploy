import { useState } from "react"
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import FooterWeb from "./components/FooterWeb"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/freework-deploy" element={<Home />} />
                <Route path="/freework-deploy/login" element={<Login />} />
            </Routes>
            <FooterWeb />
        </>
    )
}

export default App
