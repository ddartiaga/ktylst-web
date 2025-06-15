
import Image from "next/image";
import BrandSwiper from "./BrandSwiper";

export default function CompanyProfile() {
    return (<section className="wrapper bg-light">
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
                    <h2 className="fs-25 text-uppercase text-primary mb-3">
                        Company Overview
                    </h2>
                    <h3 className="display-3 mb-5">
                        A partner that supports your growth every step of the way.
                    </h3>
                    <p className="mb-6">
                        <strong className="text-primary">Katalyst I.T. Services</strong> is a
                        technology solutions provider dedicated to empowering businesses
                        through digital innovation. We specialize in procurement and delivery
                        of ICT equipments, custom web and mobile applications development,
                        cloud consulting, system maintenance and skilled manpower services. Our tailored
                        solutions help clients streamline operations, modernize
                        infrastructure, and stay competitive in a rapidly evolving digital
                        landscape—whether you&apos;re a startup or an enterprise.
                    </p>
                    <div className="row align-items-center counter-wrapper gy-6">
                        <div className="col-md-6">
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
                                        {" "}
                                        <span className="number fs-18">1</span>{" "}
                                    </div>
                                </div>
                                <div>
                                    <h3>Our Vision</h3>
                                    <p className="mb-2">
                                        To be a trusted partner for IT equipment supply, software
                                        development, and skilled workforce solutions that fuel growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-row">
                                <div>
                                    <div className="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10">
                                        {" "}
                                        <span className="number fs-18">2</span>{" "}
                                    </div>
                                </div>
                                <div>
                                    <h3>Our Mission</h3>
                                    <p className="mb-2">
                                        To empower businesses and organizations through technology,
                                        automation, equipment, and expert manpower.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BrandSwiper />
        </div>
    </section>
    );
}
