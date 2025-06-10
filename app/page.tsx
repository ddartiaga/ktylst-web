import CompanyProfile from "./home/CompanyProfile";
import Hero from "./home/Hero";
import Services from "./home/Services";
import Team from "./home/Team";
import Contact from "./home/Contact";
import ContactForm from "./home/ContactForm";

export default function Page() {
  return (<>
    <Hero />
    <CompanyProfile />
    <Services />
    <Team />
    <Contact />
    <div className="modal fade" id="contact-form" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </>)
}