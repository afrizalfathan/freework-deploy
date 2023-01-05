import React from "react"
import FilterJob from "./FilterJob"
import KerjaanPage from "./KerjaanPage"

function KerjaanWeb() {
    return (
        <div className="freelancer-page">
            <FilterJob
                typeFilter="Kerjaan"
                headerFilter="Kerjaan apa yang anda butuhkan ?"
                keahlian1="PHP"
                keahlian2="Javascript"
                keahlian3="Wordpress"
                keahlian4="HTML / CSS"
            />
            <KerjaanPage />
        </div>
    )
}

export default KerjaanWeb
