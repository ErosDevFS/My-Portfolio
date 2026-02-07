import { useEffect, useState } from "react"

type Props = {
    title: string,
    icon1: string,
    icon2: string,
    icon3?: string,
    icon4?: string,
    icon5?: string,
    icon6?: string,

}

function Card({title, icon1, icon2, icon3, icon4, icon5, icon6}: Props) {
   const [hide, setHide] = useState("")
    
useEffect(()=>{
     if(!icon3){
        setHide("none")
    }
    if(!icon4){
        setHide("none")
    }
    if(!icon5){
        setHide("none")
    }
    if(icon6 === ""){
        setHide("none")
    }
},
[])
    


    return (
        <div className="browser-card col-md-4">
            <div className="browser-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>

            </div>

            <div className="browser-content text-center">
                <h3 className="fw-bold">{title}</h3>
                <div className="d-flex flex-column align-items-center">\
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column align-items-center px-4 iconZoom">
                            <i className={icon1} style={{ fontSize: "50px" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>JavaScript (ES6+)</span>
                        </div>

                        <div className="col-md-6 d-flex flex-column align-items-center px-4 iconZoom">
                            <i className={icon2} style={{ fontSize: "50px", color: "#00b3ff" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>Python (3.14)</span>
                        </div>

                        <div className="col-md-6 d-flex flex-column align-items-center py-5 px-4 iconZoom">
                            <i className={icon3} style={{ fontSize: "50px" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>PHP (8.1)</span>
                        </div>
                         <div className="col-md-6 d-flex flex-column align-items-center py-5 px-4 iconZoom">
                            <i className={icon4} style={{ fontSize: "50px" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>PHP (8.1)</span>
                        </div>
                         <div className="col-md-6 d-flex flex-column align-items-center py-5 px-4 iconZoom">
                            <i className={icon5} style={{ fontSize: "50px" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>PHP (8.1)</span>
                        </div>
                         <div className="col-md-6 d-flex flex-column align-items-center py-5 px-4 iconZoom" style={{display: hide}}>
                            <i className={icon6} style={{  fontSize: "50px" }}></i>
                            <span className="text-secondary" style={{ fontWeight: "700" }}>PHP (8.1)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card