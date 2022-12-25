import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { AiFillStar } from "react-icons/ai"
import FilterSearch from "./FilterSearch"

function Freelancer({ dataUser }) {
    return (
        <div className="freelancer-page">
            <FilterSearch
                typeFilter="Pekerjaan"
                headerFilter="Freelancers Untuk Dipekerjakan"
            />
            <div className="main-container">
                {dataUser.map((index) => (
                    <div className="card-container">
                        <Card style={{ width: "15rem" }}>
                            <img src={index.image} className="image-profile" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    {index.name}
                                </Card.Title>
                                <Card.Subtitle className="text-center mt-2 text-muted">
                                    {index.skill}
                                </Card.Subtitle>
                                <Card.Subtitle className="mt-3 d-flex">
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="me-4 pe-5"
                                    >
                                        {index.cash}
                                    </p>
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="text-end"
                                    >
                                        <AiFillStar className="me-1" />
                                        {index.review}
                                    </p>
                                </Card.Subtitle>
                                <div className="text-center">
                                    <Button
                                        variant="warning"
                                        className="text-center mt-4"
                                    >
                                        Pekerjakan Saya
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Freelancer
