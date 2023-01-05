import React from "react"
import FilterJob from "./FilterJob"
import KerjaanPage from "./KerjaanPage"

function KerjaanDesign() {
    return (
        <div className="freelancer-page">
            <FilterJob
                typeFilter="Kerjaan"
                headerFilter="Kerjaan apa yang anda butuhkan ?"
                keahlian1="User Interface"
                keahlian2="User Experience"
                keahlian3="Figma"
                keahlian4="Adobe XD"
            />
            <KerjaanPage />
        </div>
    )
}

export default KerjaanDesign
