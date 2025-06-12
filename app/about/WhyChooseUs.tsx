

const items = [
    { title: "End-to-End Solutions", subtitle: "From planning and implementation to maintenance and support", icon: "" },
    { title: "Agile & Scalable Development", subtitle: "Rapid delivery with room for future growth", icon: "" },
    { title: "Security & Compliance Focused", subtitle: "Data protection and regulatory compliance are at our core", icon: "" },
    { title: "Experienced Team", subtitle: "10+ years of experience in procurment, sales, software engineering, DevOps, and IT consulting", icon: "" },
    { title: "Client-Centered Approach", subtitle: "We build long-term partnerships, not just projects", icon: "" },
];

const Reason = ({ title, subtitle, icon }: { title: string, subtitle: string, icon: string }) => {
    return (<div className="col-md-6 col-lg-4">
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-row">
                    <div>
                        <img
                            src="./assets/img/icons/lineal/target.svg"
                            className="svg-inject icon-svg icon-svg-sm text-aqua me-4"
                            alt=""
                        />
                    </div>
                    <div>
                        <h4 className="mb-1">{title}</h4>
                        <p className="mb-0">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}


export default function WhyChooseUs() {
    return (<>
        <section className="wrapper bg-gradient-reverse-primary">
            <div className="container py-7 py-md-8">
                <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                    <div className="col-lg-7 order-lg-2">
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-5 offset-md-1 align-self-end">
                                <div className="card bg-pale-yellow">
                                    <div className="card-body">
                                        <h4>Experienced Team</h4>
                                        <p className="mb-0">
                                            10+ years of experience in sales, procurement, software engineering, DevOps, and IT consulting
                                        </p>
                                    </div>
                                    {/*/.card-body */}
                                </div>
                                {/*/.card */}
                            </div>
                            {/*/column */}
                            <div className="col-md-6 align-self-end">
                                <div className="card bg-pale-red">
                                    <div className="card-body">
                                        <h4>Client-Centered Approach</h4>
                                        <p className="mb-0">
                                            We build long-term partnerships, not just projects
                                        </p>
                                    </div>
                                    {/*/.card-body */}
                                </div>
                                {/*/.card */}
                            </div>
                            {/*/column */}
                            <div className="col-md-5">
                                <div className="card bg-pale-leaf">
                                    <div className="card-body">
                                        <h4>End-to-End Solutions</h4>
                                        <p className="mb-0">
                                            From planning and implementation to maintenance and support
                                        </p>
                                    </div>
                                    {/*/.card-body */}
                                </div>
                                {/*/.card */}
                            </div>
                            {/*/column */}
                            <div className="col-md-6 align-self-start">
                                <div className="card bg-pale-primary">
                                    <div className="card-body">
                                        <h4>Security & Compliance Focused</h4>
                                        <p className="mb-0">
                                            Data protection and regulatory compliance are at our core
                                        </p>
                                    </div>
                                    {/*/.card-body */}
                                </div>
                                {/*/.card */}
                            </div>
                            {/*/column */}
                        </div>
                        {/*/.row */}
                    </div>
                    {/*/column */}
                    <div className="col-lg-5">
                        <h2 className="fs-15 text-uppercase text-muted mb-3">Why Choose Katalyst IT Services?</h2>
                        <h3 className="display-4 mb-5">
                            What Our Clients Love About Us
                        </h3>
                        <p>
                            Trusted by businesses for our reliability, innovation, and unmatched customer support. From seamless project delivery to responsive service—our clients value the Katalyst difference.
                        </p>
                        {/* <a href="#" className="btn btn-navy rounded-pill mt-3">
                            More Details
                        </a> */}
                    </div>
                    {/*/column */}
                </div>
                {/*/.row */}
            </div>
            {/* /.container */}
        </section>
    </>
    );
}