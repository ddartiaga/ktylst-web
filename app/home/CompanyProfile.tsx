

export default function CompanyProfile() {
    return (<section className="wrapper bg-light">
        <div className="container py-10 py-md-12">
            <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12">
                <div className="col-lg-6">
                    <div className="row gx-md-5 gy-5">
                        <div className="col-md-6">
                            <figure className="rounded">
                                <img
                                    src="/app/img/young-asian-business-creative-team-work-together.jpg"
                                    alt=""
                                />
                            </figure>
                        </div>

                        <div className="col-md-6 align-self-end">
                            <figure className="rounded">
                                <img
                                    src="/app/img/group-of-young-asian-business-team-creative-businesspeople.jpg"
                                    alt=""
                                />
                            </figure>
                        </div>

                        <div className="col-12">
                            <figure className="rounded mx-md-5">
                                <img
                                    src="/app/img/business-people-clapping-at-an-office.jpg"
                                    alt=""
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
                        landscape—whether you're a startup or an enterprise.
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
            <div className="row gx-lg-8 gx-xl-12 gy-6 ">
                <div className="col-lg-12">
                    <h3 className="display-6 mt-3 mb-3">
                        Top Tech Brands We Offer: Laptops, Servers, UPS & More
                    </h3>
                    <div
                        className="swiper-container clients mb-0"
                        data-margin={30}
                        data-dots="false"
                        data-loop="true"
                        data-autoplay="true"
                        data-autoplaytime={1}
                        data-drag="false"
                        data-speed={5000}
                        data-items-xxl={7}
                        data-items-xl={6}
                        data-items-lg={5}
                        data-items-md={4}
                        data-items-xs={2}
                    >
                        <div className="swiper">
                            <div className="swiper-wrapper ticker">
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/aws.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/microsoft.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/avaya.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/dell.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/epson.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/cisco.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/fortinet.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/hpe.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/vmware.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/veeam.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/aruba.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/santak.png" alt="" />
                                </div>
                                <div className="swiper-slide px-5">
                                    <img src="/app/img/brands/phoenix.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
