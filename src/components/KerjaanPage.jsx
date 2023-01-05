import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import jobWeb from "../jobWeb"
function KerjaanPage() {
    const [show, setShow] = useState(false)
    const [info, setInfo] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = (indexID) => {
        setShow(true)
        setInfo(indexID)
    }

    return (
        <>
            <div className="kerjaan-container">
                {jobWeb.map((index) => (
                    <div className="job-description">
                        <div className="job-header">
                            <p>
                                <b>{index.title}</b>
                            </p>
                            <div className="job-offer">
                                <p>
                                    <b>{index.price}</b>
                                </p>
                            </div>
                        </div>
                        <div className="job-body">
                            <p className="job-desc">{index.desc}</p>
                        </div>
                        <button
                            className="btn btn-warning"
                            onClick={handleShow.bind(this, index)}
                        >
                            Tawar Sekarang
                        </button>
                    </div>
                ))}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{info.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{info.desc}</p>
                        <p>
                            <b>Fee</b> : {info.price}
                        </p>
                        <p>
                            <b>Jika tertarik hubungi </b>: +62xxxxxxxx
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default KerjaanPage
