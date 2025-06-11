import ContactWithMap from "./ContactWithMap";

export default function Contact() {
    return (<section className="wrapper bg-light">
        <div className="container py-7 py-md-8">
            <div className="row">
                <div className="col-xl-12 mx-auto">
                    <div className="text-center">
                        <h3 className="display-5 mb-7">
                            Got any questions? Don't hesitate to get in touch.
                        </h3>
                    </div>
                    <ContactWithMap />
                </div>
            </div>
        </div>
    </section>
    );
}