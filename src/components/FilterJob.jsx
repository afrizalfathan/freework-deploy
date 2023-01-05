import React from "react"
import Form from "react-bootstrap/Form"
import { BiSearchAlt } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import Accordion from "react-bootstrap/Accordion"

function FilterJob(props) {
    const buttonStyle = {
        width: "20%",
        border: "none",
        height: "2rem",
    }

    const inputStyle = {
        width: "80%",
        border: "none",
    }

    const widthRange = {
        width: "30%",
        height: "12%",
    }

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Filter</Accordion.Header>
                <Accordion.Body>
                    <div className="freelancer-filter">
                        <h4>{props.headerFilter}</h4>
                        {/*  */}
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
                        {/*  */}
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
                        <ul className="jenis-kerjaan">
                            <li className="mt-3">
                                <b className="mt-3">Anggaran</b>
                            </li>
                            <li className="mt-3">
                                <input
                                    type="checkbox"
                                    id="harga-tetap"
                                    name="harga-tetap"
                                    value="Proyek Harga Tetap"
                                />
                                <label for="harga-tetap" className="ms-1">
                                    Proyek Harga Tetap
                                </label>
                            </li>
                            <li>
                                <div className="range-price">
                                    <input
                                        style={widthRange}
                                        placeholder="min"
                                    />
                                    <p>hingga</p>
                                    <input
                                        style={widthRange}
                                        placeholder="maks"
                                    />
                                </div>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    id="harga-tetap"
                                    name="harga-tetap"
                                    value="Proyek Per Jam"
                                />
                                <label for="harga-tetap" className="ms-1">
                                    Proyek Per Jam
                                </label>
                            </li>
                            <li>
                                <div className="range-price">
                                    <input
                                        style={widthRange}
                                        placeholder="min"
                                    />
                                    <p>hingga</p>
                                    <input
                                        style={widthRange}
                                        placeholder="maks"
                                    />
                                </div>
                            </li>
                        </ul>

                        <div className="jenis-kerjaan-container">
                            <b>Jenis </b>
                            <ul className="jenis-kerjaan">
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-lokal"
                                    />
                                    <label
                                        for="pekerjaan-lokal"
                                        className="ms-2"
                                    >
                                        Pekerjaan Lokal
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-sorotan"
                                    />
                                    <label
                                        for="pekerjaan-sorotan"
                                        className="ms-2"
                                    >
                                        Pekerjaan Sorotan
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-perekrut"
                                    />
                                    <label
                                        for="pekerjaan-perekrut"
                                        className="ms-2"
                                    >
                                        Pekerjaan Perekrut
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-penuh-waktu"
                                    />
                                    <label
                                        for="pekerjaan-penuh-waktu"
                                        className="ms-2"
                                    >
                                        Pekerjaan Penuh Waktu
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="jenis-kerjaan-container">
                            <b>Keahlian </b>
                            <ul className="jenis-kerjaan">
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-lokal"
                                    />
                                    <label
                                        for="pekerjaan-lokal"
                                        className="ms-2"
                                    >
                                        {props.keahlian1}
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-sorotan"
                                    />
                                    <label
                                        for="pekerjaan-sorotan"
                                        className="ms-2"
                                    >
                                        {props.keahlian2}
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-perekrut"
                                    />
                                    <label
                                        for="pekerjaan-perekrut"
                                        className="ms-2"
                                    >
                                        {props.keahlian3}
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name="pekerjaan-penuh-waktu"
                                    />
                                    <label
                                        for="pekerjaan-penuh-waktu"
                                        className="ms-2"
                                    >
                                        {props.keahlian4}
                                    </label>
                                </li>
                                <li>
                                    <input
                                        placeholder="Atau masukan keahlian"
                                        className="ps-1 mt-3"
                                        style={inputStyle}
                                    />
                                    <button style={buttonStyle}>
                                        <AiOutlinePlus />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default FilterJob
