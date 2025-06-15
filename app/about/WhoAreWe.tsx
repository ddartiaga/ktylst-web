import Image from "next/image";

export default function WhoAreWe() {
    return (<>
        <section className="wrapper bg-light mt-10">
            <div className="container py-10 py-md-12">
                <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
                    <div className="col-lg-6">
                        <div className="row gx-md-5 gy-5">
                            <div className="col-md-6">
                                <figure className="rounded">
                                    <Image
                                        src="/app/img/young-asian-business-creative-team-work-together.jpg"
                                        alt="Young Asian business creative team working together"
                                        width={500}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>

                            <div className="col-md-6 align-self-end">
                                <figure className="rounded">
                                    <Image
                                        src="/app/img/group-of-young-asian-business-team-creative-businesspeople.jpg"
                                        alt="Group of young Asian business team creative businesspeople"
                                        width={500}
                                        height={300}
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>

                            <div className="col-12">
                                <figure className="rounded mx-md-5">
                                    <Image
                                        src="/app/img/business-people-clapping-at-an-office.jpg"
                                        alt="Business people clapping at an office"
                                        width={800}
                                        height={400}
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6">
                        <h2 className="display-5 mb-3">About <span className="text-primary">Katalyst IT Services</span></h2>
                        <p className="lead fs-lg">
                            We Offer Modern IT Solutions That Drive Efficiency, Innovation, and Growth
                        </p>
                        <p className="mb-6">
                            <strong>Katalyst IT Services</strong> is a technology solutions provider committed to helping organizations modernize their infrastructure, streamline operations, and embrace digital transformation. We specialize in delivering end-to-end IT services—from supplying hardware and software licenses to building custom web and mobile applications tailored to your business needs.
                        </p>
                        <div className="mt-7">
                            <h4 className="display-6 mb-3">Our Mission</h4>
                            <p>
                                At <strong>Katalyst</strong>, our mission is simple:
                            </p>
                            <p><strong>To empower institutions by eliminating manual processes, reducing operational costs, and enhancing productivity through innovative technology solutions.</strong></p>
                            <p>We act as a <strong className="text-primary">catalyst</strong> for growth by combining deep technical expertise with a customer-first mindset, enabling our clients to thrive in today’s fast-paced digital landscape.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>

    );
}
