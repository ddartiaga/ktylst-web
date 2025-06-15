import Address from "./Address";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import PhoneNumber from "./PhoneNumber";
import ContactHero from "./ContactHero";

export default function ContactUs() {
    return (
        <>
            <ContactHero />

            <section className="wrapper bg-light angled upper-end">
                <div className="container pb-11">
                    <div className="row mb-14 mb-md-16">
                        <div className="col-xl-10 mx-auto mt-n19">
                            <div className="card">
                                <div className="row gx-0">
                                    <div className="col-lg-6 align-self-stretch">
                                        <div className="map map-full rounded-top rounded-lg-start">
                                            <ContactMap />
                                        </div>
                                        {/* /.map */}
                                    </div>
                                    {/*/column */}
                                    <div className="col-lg-6">
                                        <div className="p-10 p-md-11 p-lg-14">
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <div className="icon text-primary fs-28 me-4 mt-n1">
                                                        {" "}
                                                        <i className="uil uil-location-pin-alt" />{" "}
                                                    </div>
                                                </div>
                                                <div className="align-self-start justify-content-start">
                                                    <h5 className="mb-1">Address</h5>
                                                    <Address />
                                                </div>
                                            </div>
                                            {/*/div */}
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
                                            {/*/div */}
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
                                                        <a
                                                            href="mailto:katalysttechservices@gmail.com"
                                                            className="link-body"
                                                        >
                                                            katalysttechservices@gmail.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            {/*/div */}
                                        </div>
                                        {/*/div */}
                                    </div>
                                    {/*/column */}
                                </div>
                                {/*/.row */}
                            </div>
                            {/* /.card */}
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <h2 className="display-4 mb-3 text-center">Drop Us a Line</h2>
                            <p className="lead text-center mb-10">
                                Reach out to us from our contact form and we will get back to you
                                shortly.
                            </p>
                            <ContactForm />

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}