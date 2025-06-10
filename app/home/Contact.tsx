export default function Contact() {
    return (<section className="wrapper bg-light">
        <div className="container py-7 py-md-8">
            <div className="row">
                <div className="col-xl-12 mx-auto">
                    <div className="text-center">
                        <h3 className="display-5 mb-7">
                            Got any questions? Don't hesitate to get in touch.
                        </h3>
                    </div>
                    <div className="card">
                        <div className="row gx-0">
                            <div className="col-lg-6 align-self-stretch">
                                <div className="map map-full rounded-top rounded-lg-start">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.563543652227!2d120.94907!3d14.32936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1e8f9b3f5a1%3A0x1234567890abcdef!2sBarangay%20Burol%20Main%2C%20Dasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
                                        style={{ width: "100%", height: "100%", border: 0 }}
                                        allowFullScreen={true}
                                    />
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
                                            <address>Burol Main, Dasmarinas City, Cavite 4114</address>
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
                                            <p>
                                                +63 966 684 1752 <br className="d-none d-md-block" />
                                                +63 917 872 1024
                                            </p>
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
                {/* /column */}
            </div>
        </div>
    </section>
    );
}