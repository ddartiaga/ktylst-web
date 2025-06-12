import Contact from "../contact/Contact";
import CompanyProfile from "../home/CompanyProfile";
import Services from "../home/Services";
import Team from "../home/Team";
import WhoAreWe from "./WhoAreWe";
import WhyChooseUs from "./WhyChooseUs";


export default function About() {
    return (<>
        <section
            className="wrapper image-wrapper bg-image bg-overlay text-white"
            data-image-src="/app/img/group-of-business-people.jpg"
        >
            <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                        <h1 className="display-1 text-white mb-3">About Katalyst IT Services</h1>
                        <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                            Modern IT Solutions That Drive Efficiency, Innovation, and Growth
                        </p>
                    </div>
                    {/* /column */}
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}
        </section>
        {/* /section */}


        <WhoAreWe />
        <WhyChooseUs />
        <Services />
        <Team />
        <Contact />
    </>
    );
}