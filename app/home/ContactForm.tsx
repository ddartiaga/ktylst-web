import Link from "next/link";

export default function ContactForm() {
    return (
        <div className="row">
            <div className="col-xl-12 mx-auto">
                <h6 className="mb-5 display-6">Hi there! Let us know how we can help you.</h6>
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                    <div className="col-lg-8">
                        <form
                            className="contact-form needs-validation"
                            method="post"
                            action="./assets/php/contact.php"
                            noValidate={true}
                        >
                            <div className="messages" />
                            <div className="row gx-4">
                                <div className="col-md-6">
                                    <div className="form-floating mb-4">
                                        <input
                                            id="form_name"
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Jane"
                                            required={true}
                                        />
                                        <label htmlFor="form_name">First Name *</label>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please enter your first name.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-4">
                                        <input
                                            id="form_lastname"
                                            type="text"
                                            name="surname"
                                            className="form-control"
                                            placeholder="Doe"
                                            required={true}
                                        />
                                        <label htmlFor="form_lastname">Last Name *</label>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please enter your last name.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-4">
                                        <input
                                            id="form_email"
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="jane.doe@example.com"
                                            required={true}
                                        />
                                        <label htmlFor="form_email">Email *</label>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please provide a valid email address.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-4">
                                        <input
                                            id="form_contact"
                                            type="text"
                                            name="contact"
                                            className="form-control"
                                            required={true}
                                            placeholder="09XX"
                                        />
                                        <label htmlFor="form_email">Mobile Number *</label>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please provide a valid email address.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-md-12">
                                    <div className="form-select-wrapper mb-4">
                                        <select
                                            className="form-select"
                                            id="form-select"
                                            name="department"
                                            required={true}
                                            defaultValue={""}
                                        >
                                            <option disabled={true} value={""}>
                                                Select Service
                                            </option>
                                            <option value="ICT Equipment">ICT Equipment</option>
                                            <option value="Software License">Software License</option>
                                            <option value="Web and Mobile App Development">
                                                Web and Mobile App Development
                                            </option>
                                            <option value="Cloud Consulting">Cloud Consulting</option>
                                            <option value="IT Support and System Maintenance">
                                                IT Support and System Maintenance
                                            </option>
                                            <option value="Skilled IT Professionals">
                                                Skilled IT Professionals
                                            </option>
                                        </select>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please select a service.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-12">
                                    <div className="form-floating mb-4">
                                        <textarea
                                            id="form_message"
                                            name="message"
                                            className="form-control"
                                            placeholder="Your message"
                                            style={{ height: 150 }}
                                            required={true}
                                            defaultValue={""}
                                        />
                                        <label htmlFor="form_message">Message *</label>
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            Please enter your messsage.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-12">
                                    <div className="form-check mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="invalidCheck"
                                            required={true}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="invalidCheck"
                                        >
                                            By submitting this form, you agree to our {" "}
                                            <Link href={"/terms-and-conditions"} target="_blank" className="hover">
                                                terms and conditions
                                            </Link>
                                        </label>
                                        <div className="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                {/* /column */}
                                <div className="col-12">
                                    <input
                                        type="submit"
                                        className="btn btn-primary rounded-pill btn-send mb-3"
                                        defaultValue="Send message"
                                    />
                                    <p className="text-muted">
                                        <strong>*</strong> These fields are required.
                                    </p>
                                </div>
                                {/* /column */}
                            </div>
                            {/* /.row */}
                        </form>
                        {/* /form */}
                    </div>
                    {/*/column */}
                    <div className="col-lg-4">
                        <div className="d-flex flex-row">
                            <div>
                                <div className="icon text-primary fs-28 me-4 mt-n1">
                                    {" "}
                                    <i className="uil uil-location-pin-alt" />{" "}
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">Address</h5>
                                <address>
                                    Burol Main, Dasmarinas City, Cavite 4114
                                </address>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <div className="icon text-primary fs-28 me-4 mt-n1">
                                    {" "}
                                    <i className="uil uil-phone-volume" />{" "}
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">Phone</h5>
                                <p>
                                    +63 966 684 1752 <br className="d-none d-md-block" />
                                    +63 917 872 1024
                                </p>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div>
                                <div className="icon text-primary fs-28 me-4 mt-n1">
                                    {" "}
                                    <i className="uil uil-envelope" />{" "}
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1">E-mail</h5>
                                <p className="mb-0">
                                    <a href="#" className="text-body">
                                        katalysttechservices@gmail.com
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
            </div>
            {/* /column */}
        </div>
    );
}