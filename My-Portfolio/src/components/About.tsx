import { useEffect, useState } from "react"
import Eros from "../assets/eros.jpeg"
import MotoImg from "../assets/Moto.jpeg"

function About() {
    const [img, setImg] = useState(Eros)

    useEffect(() => {
        const imgInterval = setInterval(() => {
            setImg(previousImg => (previousImg === Eros ? MotoImg : Eros));
        }, 5000);

        return () => {
            clearInterval(imgInterval);
        };
    }, []);

    return (
        <section className="about pt-5">

            <div className="container about-body mt-4">

                <div className="mx-auto">
                    <h1 className="pt-5 text-center display-3 fw-normal" >About Me</h1>

                    <div className="mt-5 p-5 row">

                        <div className="col-md-6" style={{ fontSize: "18px" }}>
                            <p>{`I’ve always loved the idea of building things through code — making a program behave exactly the way you imagine, with no limits other than what you’re willing to learn. But there’s more to me than just coding.`}</p>

                            <p>{`I’m 21 years old and I have a dog named Eros (which inspired my GitHub username, ErosDevFS).When I’m not coding, I like riding my motorcycle, taking a break from screens, and enjoying nature.`}</p>

                            <p>{`I’m ambitious by nature. I like to push myself to improve and stand out, without putting others down. I see growth as a personal challenge — a constant competition with myself.`}</p>

                            <p>{`And yes, I love video games. I firmly believe every programmer has that one game they can spend hours playing without even noticing the time pass.`}</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="iphone">
                                <div className="iphone-notch"></div>
                                <div className="iphone-screen">
                                    <img src={img} alt={img} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About