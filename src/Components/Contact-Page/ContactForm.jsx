import React, { useState, useRef } from "react";
import { MoveDownRight } from "lucide-react";
import CEO from "../../assets/Images/Png/favicon.png";

import ContactAnime from "./ContactAnime";

const ContactForm = ({ styles }) => {

    const blackRef = useRef(null);
    const helloRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        service: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState({
        type: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setFormStatus({ type: "", message: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setFormStatus({ type: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Contact request failed");
            }

            setFormStatus({
                type: "success",
                message: "Your details have been received. We will contact you within one day.",
            });

            setFormData({
                name: "",
                email: "",
                organization: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Contact Form Error:", error);
            setFormStatus({
                type: "error",
                message: "Something went wrong. Please email us at vyxis.ai@gmail.com.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className={styles.contactPage}>

            <div ref={blackRef} className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}>
                <h2 ref={helloRef} className={styles.helloText}>• Contact</h2>
            </div>

            <div className={styles.container}>
                <div className={`${styles.topContent} ${styles.flex} ${styles.ac} ${styles.sb}`}>
                    <p>Ready to transform <br /> your business?</p>
                    <div className={`${styles.topImg} ${styles.flex} ${styles.fClmn}`}>
                        <img src={CEO} alt="" />
                        <MoveDownRight size={25} />
                    </div>
                </div>

                <div className={`${styles.lastContent} ${styles.flex} ${styles.sb}`}>
                    <div className={`${styles.formBox} ${styles.flex} ${styles.fClmn}`}>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="name"> <span>01</span> What's your name ?</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name *"
                                    value={formData.name}
                                    onChange={handleChange} required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="email"> <span>02</span> What's your email ?</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@company.com *"
                                    value={formData.email}
                                    onChange={handleChange} required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="organization">
                                    <span>03</span> What's the name of your organization ?
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    placeholder="Company name"
                                    value={formData.organization}
                                    onChange={handleChange} required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="service">
                                    <span>04</span> What services are you looking for ?
                                </label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    placeholder="CRM, EdTech, Hospitality, AI Integration..."
                                    value={formData.service}
                                    onChange={handleChange} required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="message">
                                    <span>05</span> Your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Hello Prateek, can you help us with..."
                                    value={formData.message}
                                    onChange={handleChange} required
                                ></textarea>
                            </div>

                            <div className={`${styles.contactCta} ${styles.flex} ${styles.ac}`}>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Start the Conversation"}
                                </button>
                            </div>

                            {formStatus.message && (
                                <p className={`${styles.formStatus} ${styles[formStatus.type]}`}>
                                    {formStatus.message}
                                </p>
                            )}

                        </form>
                    </div>
                    <div className={`${styles.details} ${styles.flex} ${styles.fClmn} ${styles.ac}`}>
                        <div className={`${styles.info} ${styles.flex} ${styles.fClmn}`}>
                            <p> Contact Details </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=vyxis.ai@gmail.com">vyxis.ai@gmail.com</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://vyxis-ai.vercel.app/">vyxis.ai</a>
                        </div>
                        <div className={`${styles.socials} ${styles.flex} ${styles.fClmn}`}>
                            <p> Socials </p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prateek-mittal-07b94a31b/">LinkedIn</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/prateek15000"> GitHub</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://x.com/vyxis_ai"> Twitter/X</a>
                        </div>
                    </div>
                </div>
            </div>
            <ContactAnime blackRef={blackRef} helloRef={helloRef} />
        </section>
    )
}

export default ContactForm;
