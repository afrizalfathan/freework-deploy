import React from "react"
import office from "../assets/2.svg"

function Home() {
    return (
        <div className="home-container">
            <div className="about-text">
                <h1>
                    Welcome to <span className="logo">FreeWork</span>
                    <span>.</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, aperiam?
                </p>
                <div className="button-container">
                    <button>Rekrut Freelancer</button>
                    <button>Cari Kerja</button>
                </div>
            </div>
            <div className="svg-image">
                <img src={office} width="200vh" />
            </div>
        </div>
    )
}

export default Home
