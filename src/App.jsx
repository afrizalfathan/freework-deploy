import { useState } from "react"
import "./App.css"

function App() {
    const [click, setClick] = useState(false)
    const tombol = () => {
        return setClick(true)
    }
    if (click) {
        return (
            <div>
                <h1>😁😁Fathan Ganteng😁😁</h1>
                <h1 style={{ textAlign: "center", color: "pink" }}>
                    {">///<"}
                </h1>
            </div>
        )
    }

    return (
        <div className="App">
            <button onClick={tombol}>Click Saya</button>
        </div>
    )
}

export default App
