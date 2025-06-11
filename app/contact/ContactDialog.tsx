import Link from "next/link";
import ContactForm from "./ContactForm";
import PhoneNumber from "./PhoneNumber";

export default function ContactDialog() {
    return (
        <div className="row">
            <div className="col-xl-12 mx-auto">
                <h6 className="mb-5 display-6">Hi there! Let us know how we can help you.</h6>
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                    <div className="col-lg-8">
                        <ContactForm />
                    </div>

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
                                    Amaris Homes Subdivision Phase 2, Burol Main, Dasmarinas City,{" "}
                                    <br className="d-none d-md-block" />
                                    Cavite, Philippines 4114
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
                                <PhoneNumber />
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

                </div>
                {/*/.row */}
            </div>
            {/* /column */}
        </div>
    );
}