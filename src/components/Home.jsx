import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLaptopFile,
    faUserAstronaut,
    faCreditCard,
    faHeadset,
    faShieldHalved,
    faMoneyBillWheat,
} from "@fortawesome/free-solid-svg-icons"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Home() {
    return (
        <div className="home-container">
            <div className="intro-container">
                <Container fluid="md" className="text-intro-container">
                    <Row>
                        <Col className="col-md-6">
                            <h1>
                                Welcome to
                                <span className="logo-info"> FreeWork</span> .
                            </h1>
                            <h4>
                                Rekrut freelancer terbaik untuk pekerjaan mu
                                secara Online.
                            </h4>
                            <ul>
                                <li>Bayar hanya jika Anda sudah puas 100%</li>
                                <li>Pekerjaan Web dan Design</li>
                                <li>Pekerjaan yang cepat</li>
                                <li>Harga yang terjangkau</li>
                            </ul>
                            <div className="button-container">
                                <button>Rekrut Freelancer</button>
                                <button>Cari Kerja</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="about-container">
                <div className="freelance-info-header">
                    <h5>
                        Temukan Freelancer Yang Tepat Untuk Kategori Jasa mu
                    </h5>
                    <p>
                        Kami mempunyai banyak freelancer untuk membantu Anda
                        mengerjakan job sesuai kategori di bawah ini
                    </p>
                </div>
                <div className="freelance-info-container">
                    <Container>
                        <Row md={3} className="justify-content-md-center">
                            <Col sm>
                                <div className="freelance-web-info">
                                    <h3>Web Developer</h3>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="freelance-design-info">
                                    <h3>Designer</h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="prosess-header-info">
                    <h3>Ingin tahu proses pekerjaan pada website kami ?</h3>
                </div>
                <div className="proses-container">
                    <Container>
                        <Row md={2}>
                            <Col sm>
                                <p className="prosess-header">
                                    <span className="icon-prosess">
                                        <FontAwesomeIcon icon={faLaptopFile} />
                                    </span>
                                    Buat Pekerjaan
                                </p>
                                <p>
                                    Mudah sekali untuk membuat pekerjaan.
                                    Tinggal isi judul, deskripsi pekerjaan dan
                                    menawarkan anggaran
                                </p>
                            </Col>
                            <Col sm>
                                <p className="prosess-header">
                                    <span className="icon-prosess">
                                        <FontAwesomeIcon
                                            icon={faUserAstronaut}
                                        />
                                    </span>
                                    Cari Freelancer
                                </p>
                                <p>
                                    Kami punya banyak freelancer untuk
                                    mengerjakan pekerjaan anda. Anda cukup cari
                                    freelancer yang cocok untuk pekerjaan nda
                                </p>
                            </Col>
                            <Col sm>
                                <p className="prosess-header">
                                    <span className="icon-prosess">
                                        <FontAwesomeIcon icon={faCreditCard} />
                                    </span>
                                    Bayar dengan aman
                                </p>
                                <p>
                                    Membayar pekerjaan ketika pekerjaan anda
                                    sudah selesai dan ketika anda puas dengan
                                    kualitasnya!
                                </p>
                            </Col>
                            <Col sm>
                                <p className="prosess-header">
                                    <span className="icon-prosess">
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </span>
                                    Kami Sedia Membantu
                                </p>
                                <p>
                                    Kami bisa membantu anda untuk mencarikan
                                    freelancer yang terbaik untuk pekerjaan
                                    anda.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <h3 className="reason-header">Kenapa Menggunakan Kami ?</h3>
                <div className="reason-container">
                    <Container>
                        <Row>
                            <Col sm>
                                <div className="reason-box">
                                    <span className="icon-reason">
                                        <FontAwesomeIcon
                                            icon={faUserAstronaut}
                                        />
                                    </span>
                                    <h4>Freelancer Berkualitas</h4>

                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Exercitationem quia
                                        excepturi dolores ipsam vel, repudiandae
                                        architecto error et aut iure.
                                    </p>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="reason-box">
                                    <span className="icon-reason">
                                        <FontAwesomeIcon
                                            icon={faShieldHalved}
                                        />
                                    </span>
                                    <h4>Transaksi Aman</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Exercitationem quia
                                        excepturi dolores ipsam vel, repudiandae
                                        architecto error et aut iure.
                                    </p>
                                </div>
                            </Col>
                            <Col sm>
                                <div className="reason-box">
                                    <span className="icon-reason">
                                        <FontAwesomeIcon
                                            icon={faMoneyBillWheat}
                                        />
                                    </span>
                                    <h4>Garansi Uang</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Exercitationem quia
                                        excepturi dolores ipsam vel, repudiandae
                                        architecto error et aut iure.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Home
