import React from "react"
import Form from "react-bootstrap/Form"
import { BiSearchAlt } from "react-icons/bi"
import Accordion from "react-bootstrap/Accordion"

function FilterSearch(props) {
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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filter</Accordion.Header>
                <Accordion.Body>
                    <div className="freelancer-filter">
                        <h4>{props.headerFilter}</h4>
                        <div className="freelancer-search">
                            <input
                                type="text"
                                placeholder={`Cari ${props.typeFilter}`}
                                id="cari-freelancer"
                                style={inputStyle}
                            />

                            <button style={buttonStyle}>
                                <BiSearchAlt />
                            </button>
                        </div>
                        <b style={{ marginTop: "15%" }}>
                            {props.typeFilter} apa yang Anda butuhkan?
                        </b>
                        <Form.Select
                            aria-label="Default select example"
                            width="20%"
                        >
                            <option>Pilih Kategori {props.typeFilter}</option>
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
    )
}

export default FilterSearch
