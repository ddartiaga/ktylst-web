"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function ContactHero() {

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

    return (<section
        className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
        data-image-src="/assets/img/photos/bg3.jpg"
    >
        <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                    <nav className="d-inline-block" aria-label="breadcrumb">
                        <ol className="breadcrumb text-white">
                            <li className="breadcrumb-item">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Contact
                            </li>
                        </ol>
                    </nav>
                    {/* /nav */}
                </div>

            </div>

        </div>

    </section>);
}