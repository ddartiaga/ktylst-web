import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <section
                className="wrapper image-wrapper bg-image bg-overlay text-white"
                data-image-src="/app/img/terms-and-conditions.jpg"
            >
                <div className="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                            <h1 className="display-1 text-white mb-3">Terms and Conditions</h1>
                            <p className="lead fs-lg px-md-3 px-lg-7 px-xl-9 px-xxl-10">
                                Terms and Conditions govern your access to and use of our website and our services and related technology solutions.
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
                                    <h2 className="mb-10 text-uppercase">Terms and Conditions</h2>
                                    <div className="mb-10">
                                        <div><strong>Effective Date: </strong>January 28, 2025</div>
                                        <div><strong>Last Updated: </strong>June 07, 2025</div>
                                        <p className="mt-5">Welcome to <strong>Katalyst IT Services</strong> ("Katalyst", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website and IT services, including custom software development, infrastructure automation, consulting, procurement, and related technology solutions.
                                            <br /><br />
                                            By accessing or using our services, you agree to these Terms. If you do not agree, do not use our services.</p>
                                    </div>
                                    <div className="mb-10">
                                        <h4 className="">1. Services Overview</h4>
                                        <p className="lead">
                                            Katalyst offers a wide range of IT solutions including:
                                        </p>
                                        <ul>
                                            <li>Cloud-native development and automation</li>
                                            <li>Custom software and web applications</li>
                                            <li>Infrastructure modernization</li>
                                            <li>Hardware/software sourcing</li>
                                            <li>Consulting, support, and training</li>
                                        </ul>
                                        <div>All service details and deliverables will be outlined in individual proposals or contracts.</div>
                                    </div>


                                    <div className="mb-10">
                                        <h4 className="">2. Eligibility</h4>
                                        <p className="lead">
                                            You must be at least 18 years old or have legal authority to act on behalf of an entity to use our services.
                                        </p>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">3. Use of Services</h4>
                                        <p className="lead">
                                            You agree to:
                                        </p>
                                        <ul>
                                            <li>Use our services for lawful purposes only</li>
                                            <li>Not interfere with system integrity or security</li>
                                            <li>Not reverse-engineer or copy our proprietary systems</li>
                                            <li>Provide accurate information when requested</li>
                                        </ul>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">4. Intellectual Property</h4>

                                        <p className="lead">All content, designs, source code, and documentation developed by Katalyst remain our property unless otherwise stated in a written agreement. Any tools or reusable code components may be licensed to the client for use but not transferred outright.</p>
                                    </div>


                                    <div className="mb-10">
                                        <h4 className="">5. Confidentiality</h4>
                                        <p className="lead">
                                            Both parties agree to maintain the confidentiality of all non-public information shared during service delivery. This obligation continues even after the engagement ends.
                                        </p>
                                    </div>



                                    <div className="mb-10">
                                        <h4 className="">6. Payment Terms</h4>
                                        <p className="lead">
                                            Fees and payment schedules are defined in the service agreement. Invoices are due based on the agreed timeline. Late payments may incur interest and could result in service suspension.
                                        </p>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">7. Warranties & Disclaimers</h4>
                                        <p className="lead">
                                            We strive to deliver high-quality services, but we do not warrant that:
                                        </p>
                                        <ul>
                                            <li>Services will be error-free or uninterrupted</li>
                                            <li>Software will meet every use case unless specified</li>
                                            <li>ICT Equipments are defect-free</li>
                                        </ul>
                                        <div>All services are provided “as is” unless otherwise agreed in writing.</div>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">8. Limitation of Liability</h4>
                                        <p className="lead">
                                            Katalyst is not liable for indirect, incidental, or consequential damages, including lost profits or data, arising from your use of our services.
                                            <br /><br />
                                            Maximum liability is limited to the amount paid by the client for the services giving rise to the claim.
                                        </p>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">9. Termination</h4>
                                        <p className="lead">
                                            We may terminate services if:
                                        </p>
                                        <ul>
                                            <li>You breach these Terms</li>
                                            <li>You fail to pay on time</li>
                                            <li>You engage in unlawful or abusive behavior</li>
                                        </ul>
                                        <div>Upon termination, any outstanding fees become due, and access to deliverables may be restricted until resolved.</div>
                                    </div>

                                    <div className="mb-10">
                                        <h4 className="">10. Governing Law</h4>
                                        <p className="lead">
                                            These Terms shall be governed by the laws of the <strong>Republic of the Philippines</strong>, unless otherwise specified in a separate agreement.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="">11. Contact Us</h4>
                                        <p className="lead">
                                            For questions or concerns:
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
