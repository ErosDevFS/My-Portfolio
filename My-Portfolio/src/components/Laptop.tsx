function Laptop(){

    const decoration = "</>"
    return (
        <div className="laptop">
            <div className="screen">
                <div className="screen-glow" />
                <div className="screen-content">
                    <h1>Julian Sedano <span style={{color:"#4f8cff"}}>{decoration}</span></h1>
                    <p>Full Stack Web Dev <span className="cursor">|</span></p>

                    <div className="navigation row">
                        <a className="btn btn-primary col-md-2" href="#">About Me</a>
                        <a className="btn btn-primary col-md-2" href="#">Skills</a>
                        <a className="btn btn-primary col-md-2" href="#">Projects</a>
                        <a className="btn btn-primary col-md-2" href="#">Contact</a>
                    </div>
                    
                    
                </div>
            </div>
            <div className="hinge"></div>
            <div className="keyboard">
                <div className="keys">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div className="key" key={i}><span className="key-label">JS</span></div>
                    ))}
                </div>
                <div className="mouse-pad"></div>
                <div className="rgb-3deffect">
                    <div className="rgb-strip" />
                </div>
                
            </div>
        </div>
    )
}

export default Laptop