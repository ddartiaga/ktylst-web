import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                data-image-src="/app/img/privacy-policy.jpg"
            >
                <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                            <h1 className="display-1 text-white mb-3">Our Privacy Policy</h1>
                            <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                                This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.
                            </p>
                        </div>
                        {/* /column */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>


            <section className="wrapper bg-light">
                <div className="container py-10 py-md-12">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body p-10">
                                    <h2 className="mb-10 text-uppercase">Privacy Policy</h2>
                                    <div className="mb-10">
                                        <div><strong>Effective Date: </strong>January 28, 2025</div>
                                        <div><strong>Last Updated: </strong>June 07, 2025</div>
                                        <p className="mt-5"><strong>Katalyst IT Services</strong> ("Katalyst", "we", "our", or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect personal information through our website and services.
                                            <br /><br />
                                            By using our website or services, you agree to this Privacy Policy.</p>
                                    </div>
                                    <div className="mb-10">
                                        <h4 className="">1. Information We Collect</h4>
                                        <p className="lead">
                                            We may collect the following types of information:
                                        </p>
                                        <ul>
                                            <li>Name, email, and contact details (via forms, email, or support)</li>
                                            <li>Company information (for business clients)</li>
                                            <li>Information about your device and browser (e.g., IP address, browser type, operating system)</li>
                                            <li>Information about your use of our website (e.g., pages visited, actions taken)</li>
                                            <li>Any data submitted through service-related portals or tools</li>
                                        </ul>
                                    </div>


                                    <div className="mb-10">
                                        <h4 className="">2. How We Use Your Information</h4>
                                        <p className="lead">
                                            We use your information to:
                                        </p>
                                        <ul>
                                            <li>Respond to inquiries and provide support</li>
                                            <li>Deliver services as outlined in our contracts</li>
                                            <li>Improve our website and services</li>
                                            <li>Send project updates, invoices, or service alerts</li>
                                            <li>Comply with legal obligations</li>
                                            <li>Analyze usage patterns and trends</li>
                                        </ul>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">3. How We Share Information</h4>
                                        <p className="lead">
                                            We do not sell or rent your data. We may share information with:
                                        </p>
                                        <ul>
                                            <li>Trusted third-party providers (e.g., cloud hosting, payment processors)</li>
                                            <li>Legal authorities when required by law</li>
                                            <li>Internal staff and contractors under confidentiality agreements</li>
                                            <li>Service providers who assist in delivering our services</li>
                                            <li>Business partners and affiliates</li>
                                        </ul>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">4. Cookies and Tracking</h4>
                                        <p className="lead">
                                            We use cookies and similar technologies for:
                                        </p>
                                        <ul>
                                            <li>Website analytics (e.g., Google Analytics)</li>
                                            <li>User experience improvements</li>
                                            <li>Security and session management</li>
                                            <li>Customized content and advertisements</li>
                                        </ul>
                                        <div>You can disable cookies in your browser, though some features may not work properly.</div>
                                    </div>


                                    <div className="mb-10">
                                        <h4 className="">5. Data Security</h4>
                                        <p className="lead">
                                            We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or loss.
                                        </p>
                                    </div>



                                    <div className="mb-10">
                                        <h4 className="">6. Your Rights</h4>
                                        <p className="lead">
                                            You have the right to:
                                        </p>
                                        <ul>
                                            <li>Access your personal data</li>
                                            <li>Request correction or deletion</li>
                                            <li>Withdraw consent (where applicable)</li>
                                            <li>File a complaint with a data protection authority (e.g., NPC)</li>
                                        </ul>
                                        <div>To make a request, email us at katalysttechservices@gmail.com</div>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">7. Data Retention</h4>
                                        <p className="lead">
                                            We retain your data only for as long as necessary to:
                                        </p>
                                        <ul>
                                            <li>Fulfill our service obligations</li>
                                            <li>Comply with legal requirements</li>
                                            <li>Maintain business records (e.g., tax and audit)</li>
                                        </ul>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">8. Children's Privacy</h4>
                                        <p className="lead">
                                            We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or loss.
                                        </p>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">9. Changes to This Policy</h4>
                                        <p className="lead">
                                            We may update this policy from time to time. Revisions will be posted on our website with the new effective date.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="">10. Contact Us</h4>
                                        <p className="lead">
                                            If you have any privacy-related questions:
                                        </p>
                                        <div className="text-primary"><strong>KATALYST IT SERVICES</strong></div>
                                        <div><strong>Email: </strong><a href="mailto:katalysttechservices@gmail.com">katalysttechservices@gmail.com</a></div>
                                        <div><strong>Contact: </strong> 0966-684-1752 / 0917-872-1024 </div>
                                        <div><strong>Website: </strong> <Link href="/">katalysttechservices.com</Link></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
