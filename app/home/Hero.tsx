import ContactForm from "./ContactForm";

const slides = [
    {
        image: "/app/img/hero/network-switch-and-ethernet-cables.jpg",
        title: "Katalyst IT Services — Your Trusted Tech Partner",
        description: "We help businesses modernize operations with reliable IT equipment, custom software, cloud consulting, and full-stack tech solutions.",
        labelClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start",
        cta: "Explore Our Services",
        ctaLink: "#services"
    },
    {
        image: "/app/img/hero/abstract-cybersecurity-concept-design.jpg",
        title: "Reliable IT Hardware Delivered Fast",
        description: "From uninterruptible power supplies (UPS), laptops to servers and routers — we supply quality IT equipment for every business need.",
        labelClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start",
        cta: "Request a Quote Today",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=ICT%20Equipment%20Quotation%20Request&body=Hello,%20I%20am%20interested%20in%20your%20ICT%20equipment%20and%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    },
    {
        image: "/app/img/hero/web-developer.jpg",
        title: "Custom Web and Mobile Apps That Work for You",
        description: "We build scalable websites and mobile applications that drive results across devices.",
        labelClass: "col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center",
        cta: "Start Your Project Now",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=Web%20and%20Mobile%20App%20Development%20Request&body=Hello,%20I%20am%20interested%20in%20your%20web%20and%20mobile%20app%20development%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    },
    {
        image: "/app/img/hero/cloud-technology.jpg",
        title: "Cloud Strategy and Migration Made Simple",
        description: "Maximize performance and reduce costs with expert cloud consulting and infrastructure solutions.",
        labelClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start",
        cta: "Talk to a Cloud Expert",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=Cloud%20Strategy%20and%20Migration%20Request&body=Hello,%20I%20am%20interested%20in%20your%20cloud%20strategy%20and%20migration%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    },
    {
        image: "/app/img/hero/computer-servicing.jpg",
        title: "Reliable IT Support and System Maintenance",
        description: "Prevent downtime and keep your tech running smoothly with our proactive maintenance services.",
        labelClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start",
        cta: "Schedule a Service",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=IT%20Support%20and%20System%20Maintenance%20Request&body=Hello,%20I%20am%20interested%20in%20your%20IT%20support%20and%20system%20maintenance%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    },
    {
        image: "/app/img/hero/working-technician.jpg",
        title: "Skilled IT Professionals, When You Need Them",
        description: "Augment your team with certified developers, engineers, and IT support staff.",
        labelClass: "col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center",
        cta: "Hire Now",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=Skilled%20IT%20Professionals%20Request&body=Hello,%20I%20am%20interested%20in%20your%20skilled%20IT%20professionals%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    },
    {
        image: "/app/img/hero/software-license.png",
        title: "Official Software Licenses, All in One Place",
        description: "We supply genuine software licenses for Windows, Microsoft 365, Adobe, and more.",
        labelClass: "col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start",
        cta: "Get a License Quote",
        ctaLink: "mailto:katalysttechservices@gmail.com?subject=Software%20License%20Quotation%20Request&body=Hello,%20I%20am%20interested%20in%20your%20software%20license%20services.%20Please%20find%20my%20contact%20details%20below.%20Thank%20you."
    }
];

const Slide = ({ image, title, description, labelClass, cta, ctaLink }: { image: string, title: string, description: string, labelClass: string, cta: string, ctaLink: string }) => {
    return (<>
        <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            data-image-src={image}
        >
            <div className="container h-100">
                <div className="row h-100">
                    <div className={labelClass}>
                        <h2 className="display-1 fs-48 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                            {title}
                        </h2>
                        <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                            {description}
                        </p>
                        <div className="animate__animated animate__slideInUp animate__delay-3s">
                            <a
                                href="#"
                                className="btn btn-lg btn-outline-white rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#contact-form"
                            >
                                {cta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>);
}

export default function Hero() {
    return (<section className="wrapper bg-dark">
        <div
            className="swiper-container swiper-hero dots-over"
            data-margin={0}
            data-autoplay="true"
            data-autoplaytime={7000}
            data-nav="true"
            data-dots="true"
            data-items={1}
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <Slide key={index} {...slide} />
                    ))}
                </div>
                {/*/.swiper-wrapper */}
            </div>
            {/* /.swiper */}
        </div>
        {/* /.swiper-container */}
    </section>);
}