import { useState } from "react"

function Contact() {
    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            console.log("Formulario válido ✅", formData);
        }

        setValidated(true);
    }



    return (
        <section className="about pt-5">

            <div className="container about-body mt-4">

                <div className="mx-auto">
                    <h1 className="pt-5 text-center display-3 fw-normal" >Contact Me!</h1>

                    <form onSubmit={handleSubmit} className={`row w-50 mx-auto mt-5 ${validated ? "was-validated" : ""}`} noValidate>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control py-2" name="name" id="nameInput" placeholder="Enter your name" onChange={handleChange} required />
                            <div className="invalid-feedback">
                                Please fill this out!
                            </div>
                        </div>
                        <div className="mb-2 col-md-6">
                            <label htmlFor="emailInput" className="form-label">Email</label>
                            <input type="email" className="form-control py-2" name="email" id="emailInput" placeholder="Enter email" onChange={handleChange} required />
                            <div className="invalid-feedback">
                                Yeah, I probably need this too!
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="messageInput" className="form-label">Your message</label>
                            <textarea className="form-control" name="message" id="messageInput" rows={6}  onChange={handleChange} required></textarea>
                            <div className="invalid-feedback">
                                I would like to read a message from you
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-25 py-3 mx-auto mb-5">Send Message</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact