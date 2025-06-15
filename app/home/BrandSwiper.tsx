"use client";

import Image from 'next/image';

export default function BrandSwiper() {

    return (
        <>


            <div className="row gx-lg-8 gx-xl-12 gy-6 ">
                <div className="col-lg-12">
                    <h3 className="display-6 mt-3 mb-3">
                        Top Tech Brands We Offer: Laptops, Servers, UPS & More
                    </h3>
                    <div
                        className="swiper-container clients mb-0"
                        data-margin={30}
                        data-dots="false"
                        data-loop="true"
                        data-autoplay="true"
                        data-autoplaytime={1}
                        data-drag="false"
                        data-speed={5000}
                        data-items-xxl={7}
                        data-items-xl={6}
                        data-items-lg={5}
                        data-items-md={4}
                        data-items-xs={2}
                    >
                        <div className="swiper">
                            <div className="swiper-wrapper ticker">
                                <div className="swiper-slide px-5">

                                    {/* <img src="/app/img/brands/aws.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/aws.png"
                                        alt="aws"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/microsoft.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/microsoft.png"
                                        alt="microsoft"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/avaya.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/avaya.png"
                                        alt="avaya"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/dell.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/dell.png"
                                        alt="dell"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/epson.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/epson.png"
                                        alt="epson"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/cisco.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/cisco.png"
                                        alt="cisco"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/fortinet.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/fortinet.png"
                                        alt="fortinet"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/hpe.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/hpe.png"
                                        alt="hpe"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/vmware.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/vmware.png"
                                        alt="vmware"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/veeam.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/veeam.png"
                                        alt="veeam"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/aruba.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/aruba.png"
                                        alt="aruba"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/santak.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/santak.png"
                                        alt="santak"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="swiper-slide px-5">
                                    {/* <img src="/app/img/brands/phoenix.png" alt="" /> */}
                                    <Image
                                        src="/app/img/brands/phoenix.png"
                                        alt="phoenix"
                                        width={120}
                                        height={40}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}