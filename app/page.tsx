import CompanyProfile from "./home/CompanyProfile";
import Hero from "./home/Hero";
import Services from "./home/Services";
import Contact from "./contact/Contact";
import ContactDialog from "./contact/ContactDialog";

export default function Page() {
  return (<>
    <Hero />
    <CompanyProfile />
    <Services />

    <Contact />
    <div className="modal fade" id="contact-form" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <ContactDialog />
          </div>
        </div>
      </div>
    </div>

    
  </>)
}