import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { AiFillStar } from "react-icons/ai"
import FilterSearch from "./FilterSearch"

function Freelancer({ dataUser }) {
    const [info, setInfo] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = (indexID) => {
        setShow(true)
        setInfo(indexID)
    }

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
                                        onClick={handleShow.bind(this, index)}
                                    >
                                        Pekerjakan Saya
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Freelancer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            <b>Nama : </b>
                            {info.name}
                        </p>
                        <p>
                            <b>Skill : </b> {info.skill}
                        </p>
                        <p>
                            <b>Desc : </b>
                            {info.desc}
                        </p>
                        <p>
                            <b>Fee : </b>
                            {info.cash}
                        </p>
                        <p>
                            <b>Rating : </b>
                            {info.review}
                        </p>
                        <p>
                            <b>Nomor : </b>
                            +62xxxxxxx
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Freelancer
