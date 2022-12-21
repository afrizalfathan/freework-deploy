import React from "react"
import FreelanceWebUser from "../freelanceWebUser"

function FreelancerWeb() {
    return (
        <>
            <h1>Hire Web Developer</h1>
            {FreelanceWebUser.map((web) => (
                <div className="freelancer-container">
                    <div className="profile">
                        <img src={web.image} className="profile-image" />
                        <div className="profile-info">
                            <p>
                                <b>{web.name}</b>
                            </p>
                            <p>{web.skill}</p>
                        </div>
                    </div>

                    <p className="description-freelancer">{web.description}</p>
                    <button>Hire</button>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default FreelancerWeb
