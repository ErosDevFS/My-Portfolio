function Laptop(){

    const decoration = "</>"
    return (
        <div className="laptop">
            <div className="screen">
                <div className="screen-glow" />
                <div className="screen-content">
                    <h1>Julian Sedano <span style={{color:"#4f8cff"}}>{decoration}</span></h1>
                    <p>Full Stack Web Dev <span className="cursor">|</span></p>

                    
                    
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