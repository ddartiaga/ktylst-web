
import Contact from "../contact/Contact";
import Services from "../home/Services";
import Team from "../home/Team";
import WhoAreWe from "./WhoAreWe";
import WhyChooseUs from "./WhyChooseUs";
import AboutHero from "./AboutHero";


export default function About() {
    return (
        <>
            <AboutHero />
            <WhoAreWe />
            <WhyChooseUs />
            <Services />
            <Team />
            <Contact />
        </>
    );
}