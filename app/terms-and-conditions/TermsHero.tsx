"use client";

import { useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function TermsHero() {

    const pathname = usePathname(); // triggers effect on route change

    useEffect(() => {
        const bg = document.querySelectorAll(".bg-image");
        bg.forEach((el) => {
            const url = el.getAttribute("data-image-src");
            if (url) {
                (el as HTMLElement).style.backgroundImage = `url('${url}')`;
            }
        });
    }, [pathname]);

    return (
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
                </div>
            </div>
        </section>
    );
}