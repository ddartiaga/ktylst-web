import ContactMap from "./ContactMap";

export default function ContactWithMap() {
    return <div className="card">
        <div className="row gx-0">
            <div className="col-lg-6 align-self-stretch">
                <div className="map map-full rounded-top rounded-lg-start">
                    <ContactMap />
                </div>
            </div>

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
                            <address>Burol Main, Dasmarinas City, Cavite 4114</address>
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
                                <a
                                    href="mailto:katalysttechservices@gmail.com"
                                >
                                    katalysttechservices@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
}