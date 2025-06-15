"use client";

import { useEffect } from "react";
import { usePathname } from 'next/navigation';


export default function Banner({ image, title, description, labelClass, cta }: { image: string, title: string, description: string, labelClass: string, cta: string }) {

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

    return (<>
        <div
            className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
            data-image-src={image}
        >
            <div className="container h-100">
                <div className="row h-100">
                    <div className={labelClass}>
                        <h2 className="display-1 fs-48 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                            {title}
                        </h2>
                        <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                            {description}
                        </p>
                        <div className="animate__animated animate__slideInUp animate__delay-3s">
                            <a
                                href="#"
                                className="btn btn-lg btn-outline-white rounded-pill"
                                data-bs-toggle="modal"
                                data-bs-target="#contact-form"
                            >
                                {cta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}