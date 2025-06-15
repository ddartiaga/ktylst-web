"use client";

import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';

const teamMembers = [
    {
        name: "Dudz Artiaga",
        image: "/app/img/team/dudz.jpg",
        role: "Head of Software Development",
        description: "Dudz is a software architect with 10+ years of experience and AWS Cloud Developer certification, focused on building scalable and efficient solutions."
    },
    {
        name: "Ninz Artiaga",
        image: "/app/img/team/nina3.jpg",
        role: "Head of Sales and Operations",
        description: "Ninz is a sales and operations professional with 10 years of experience in the government sector, known for building strong relationships and driving results."
    },
    {
        name: "Jocelle Allen Alminar",
        image: "/assets/img/avatars/t3.jpg",
        role: "Head of Procurement",
        description: "Jocelle is a procurement expert with 5+ years of experience in sourcing, vendor management, and cost optimization."
    }
];

const TeamMember = ({ name, image, role, description }: { name: string, image: string, role: string, description: string }) => {
    return (
        <div className="swiper-slide">
            <Image
                className="rounded-circle w-20 mx-auto mb-4"
                src={image}
                alt={name}
                width={500}
                height={500}
            />
            <h4 className="mb-1">{name}</h4>
            <div className="meta mb-2">{role}</div>
            <p className="mb-2">
                {description}
            </p>
        </div>
    );
}

declare global {
    interface Window {
        theme: {
            swiperSlider: () => void;
        }
    }
}


export default function Team() {
    const pathname = usePathname(); // triggers effect on route change

    useEffect(() => {
        // Initialize Swiper after the component mounts
        if (typeof window !== 'undefined' && window.theme) {
            window.theme.swiperSlider();
        }
    }, [pathname]); // Re-initialize when route changes

    return (<section className="wrapper bg-gradient-primary">
        <div className="container py-10 py-md-12">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-4">
                    <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">
                        Our Team
                    </h2>
                    <h3 className="display-5 mb-5">
                        Meet the dedicated professionals who make it happen.
                    </h3>
                    <p>
                        Our team is made up of experienced sales and marketing professionals,
                        software developers, and technical specialists who are passionate
                        about delivering high-quality solutions that meet your business needs.
                    </p>
                    {/* <a href="#" class="btn btn-primary rounded-pill mt-3">See All Members</a> */}
                </div>
                {/*/column */}
                <div className="col-lg-8">
                    <div
                        className="swiper-container text-center mb-6"
                        data-margin={30}
                        data-dots="true"
                        data-items-xl={3}
                        data-items-md={2}
                        data-items-xs={1}
                    >
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {teamMembers.map((member, index) => (
                                    <TeamMember key={index} {...member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}