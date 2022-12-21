import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FreelanceWebUser from "../freelanceWebUser"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import Accordion from "react-bootstrap/Accordion"

function FreelancerDesign() {
    const buttonStyle = {
        width: "20%",
        border: "none",
        height: "2rem",
    }

    const inputStyle = {
        width: "80%",
        border: "none",
    }
    return (
        <div className="freelancer-page">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filter</Accordion.Header>
                    <Accordion.Body>
                        <div className="freelancer-filter">
                            <h4>Freelancers Untuk Dipekerjakan</h4>
                            <div className="freelancer-search">
                                <input
                                    type="text"
                                    placeholder="Cari Freelancer"
                                    id="cari-freelancer"
                                    style={inputStyle}
                                />

                                <button style={buttonStyle}>
                                    <BiSearchAlt />
                                </button>
                            </div>
                            <b style={{ marginTop: "15%" }}>
                                Pekerjaan apa yang Anda butuhkan?
                            </b>
                            <Form.Select
                                aria-label="Default select example"
                                width="20%"
                            >
                                <option>Pilih Kategori Pekerjaan</option>
                                <option value="1">Web Developer</option>
                                <option value="2">Designer</option>
                            </Form.Select>
                            <div className="freelancer-search">
                                <label for="cari-freelancer">
                                    <b>Keahlian : </b>
                                </label>

                                <div className="search-container">
                                    <input
                                        type="text"
                                        placeholder="Cari Keahlian"
                                        style={inputStyle}
                                    />
                                    <button
                                        style={{ width: "20%", border: "none" }}
                                    >
                                        <BiSearchAlt />
                                    </button>
                                </div>
                            </div>
                            <div className="freelancer-search">
                                <label for="cari-freelancer">
                                    <b>Kota : </b>
                                </label>

                                <div className="search-container">
                                    <input
                                        type="text"
                                        placeholder="Cari Kota"
                                        style={inputStyle}
                                    />
                                    <button style={buttonStyle}>
                                        <BiSearchAlt />
                                    </button>
                                </div>
                            </div>
                            <div
                                className="freelancer-search"
                                style={{ marginBottom: "20%" }}
                            >
                                <Form.Select
                                    aria-label="Default select example"
                                    width="20%"
                                >
                                    <option>Tarif Per Jam (USD)</option>
                                    <option value="1">{" < "}$10/jam</option>
                                    <option value="2">$10-20/jam</option>
                                    <option value="3">$20-30/jam</option>
                                </Form.Select>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="main-container">
                {FreelanceWebUser.map((web) => (
                    <div className="card-container">
                        <Card style={{ width: "15rem" }}>
                            <img src={web.image} className="image-profile" />
                            <Card.Body>
                                <Card.Title className="text-center">
                                    {web.name}
                                </Card.Title>
                                <Card.Subtitle className="text-center mt-2 text-muted">
                                    {web.skill}
                                </Card.Subtitle>
                                <Card.Subtitle className="mt-3 d-flex">
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="me-4 pe-5"
                                    >
                                        {web.cash}
                                    </p>
                                    <p
                                        style={{ fontSize: "14px" }}
                                        className="text-end"
                                    >
                                        <AiFillStar className="me-1" />
                                        {web.review}
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

export default FreelancerDesign
