
const services = [
    {
        icon: "uil uil-processor",
        title: "ICT Equipment Supply",
        description: "From uninterruptible power supplies (UPS), laptops to servers and routers — we supply quality IT equipment for every business need.",
        link: "/services/ict-equipment-supply",
        color: "yellow"
    },
    {
        icon: "uil uil-brackets-curly",
        title: "Custom Web and Mobile Applications Development",
        description: "We build scalable websites and mobile applications that drive results across devices.",
        link: "/services/custom-web-and-mobile-applications-development",
        color: "green"
    },
    {
        icon: "uil uil-cloud-computing",
        title: "Cloud Consulting and Implementation",
        description: "We help businesses migrate to the cloud, optimize cloud resources, and ensure seamless cloud integration.",
        link: "/services/cloud-consulting-and-implementation",
        color: "blue"
    },
    {
        icon: "uil uil-constructor",
        title: "Skilled Manpower Services",
        description: "Skilled IT professionals and technical specialists for installation, support, and infrastructure projects. Reliable staffing solutions for short-term tasks and long-term contracts.",
        link: "/services/skilled-manpower-services",
        color: "yellow"
    },
    {
        icon: "uil uil-cog",
        title: "Hardware Maintenance and Repair",
        description: "We repair and maintain hardware devices to keep your systems running smoothly and efficiently.",
        link: "/services/hardware-maintenance-and-repair",
        color: "green"
    },
    {
        icon: "uil uil-lock-access",
        title: "Software License and Procurement",
        description: "We supply genuine software licenses for Windows, Microsoft 365, Adobe, and more.",
        link: "/services/software-license-and-procurement",
        color: "blue"
    }
];

const ServiceItem = ({ icon, title, description, color }: { icon: string, title: string, description: string, color: string }) => {
    return (<div className="col-md-6 col-lg-4">
        <div className="d-flex flex-row">
            <div>
                <div className={`icon btn btn-block btn-lg btn-soft-${color} pe-none me-4`}>
                    {" "}
                    <i className={icon} />{" "}
                </div>
            </div>
            <div>
                <h4 className="mb-1">{title}</h4>
                <p className="mb-0">
                    {description}
                </p>
                {/* <Link href={link} className={`more hover link-${color}`}>
                    Learn More
                </Link> */}
            </div>
        </div>
    </div>);
}



export default function Services() {
    return (<section className="wrapper bg-light">
        <div className="container py-7 py-md-8">
            <div className="row text-center">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h2 className="fs-15 text-uppercase text-muted mb-3">Our Services</h2>
                    <h3 className="display-4 mb-9 px-xl-11">
                        Discover tailored solutions for your business designed to meet your
                        needs.
                    </h3>
                </div>
                {/* /column */}
            </div>
            {/* /.row */}
            <div className="row gx-lg-8 gx-xl-12 gy-8">
                {services.map((service, idx) => <ServiceItem key={idx} icon={service.icon} title={service.title} description={service.description} color={service.color} />)}
            </div>
            {/*/.row */}
        </div>
        {/* /.container */}
    </section>
    );
}