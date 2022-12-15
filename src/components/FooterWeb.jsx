import React from "react"
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit"

export default function FooterWeb() {
    return (
        <MDBFooter
            className=" text-center text-white"
            style={{ backgroundColor: "#363333" }}
        >
            <MDBContainer className="p-4 pb-0">
                <section className="mb-4">
                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="twitter" />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="instagram" />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>

                    <MDBBtn
                        outline
                        color="light"
                        floating
                        className="m-1"
                        href="#!"
                        role="button"
                    >
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "#272121" }}
            >
                © 2020 Copyright :{" "}
                <a className="text-white" href="https://mdbootstrap.com/">
                    Freework.com
                </a>
            </div>
        </MDBFooter>
    )
}
