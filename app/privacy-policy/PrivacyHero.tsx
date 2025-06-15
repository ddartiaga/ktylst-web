"use client";

import { useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function PrivacyHero() {

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
                </div>
            </div>
        </section>);
}