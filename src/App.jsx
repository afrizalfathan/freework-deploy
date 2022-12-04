import { useState } from "react"
import Navigation from "./components/Navigation"
import Home from "./components/Home"

import "./App.css"

function App() {
    return (
        <div className="App">
            <Navigation />
            <Home />
        </div>
    )
}

export default App
