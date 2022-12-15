import React from "react"
import FreelanceWebUser from "../freelanceWebUser"
import { Row, Container, Col } from "react-bootstrap"

function FreelancerDesign() {
    return (
        <>
            <h1>Hire Designer</h1>
            {FreelanceWebUser.map((web) => (
                <div className="freelancer-container">
                    <Container>
                        <Row>
                            <Col>
                                <p>{web.name}</p>
                                <p>{web.skill}</p>
                                <p>{web.description}</p>
                                <hr />
                            </Col>
                            <Col>
                                <button>Hire</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </>
    )
}

export default FreelancerDesign
