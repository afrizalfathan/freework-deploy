import React from "react"
import FilterSearch from "./FilterSearch"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function KerjaanPage() {
    return (
        <div className="freelancer-page">
            <FilterSearch
                typeFilter="Kerjaan"
                headerFilter="Kerjaan apa yang anda butuhkan ?"
            />
            <div className="main-container">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KerjaanPage
