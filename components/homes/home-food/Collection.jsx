import React from "react";
import { collectionItems3 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
export default function ShopCollections() {
  return (
    <section className="flat-spacing-1" style={{backgroundColor:"#ebbe7f!important"}}>
        <div
          className="flat-title text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title" style={{fontSize:"40px",color:"#A31D1D",fontWeight:"700"}}>Collections</span>
          <span className="text-gray-700 block" style={{fontSize:"20px"}}>"Pure, Homemade Goodness in Every Bite"</span>
        </div>
      <div className="container">
        <div className="tf-grid-layout lg-col-3 tf-col-2">
          {collectionItems3.map((item, index) => (
            <div className="collection-item hover-img" key={index}>
              <div className="collection-inner">
                <Link
                  href={`/shop-default`}
                  className="collection-image img-style"
                >
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={460}
                    height={460}
                  />
                </Link>
                <div className="collection-content">
                  <Link
                    href={`/shop-default`}
                    className="tf-btn collection-title hover-icon"
                  >
                    <span>{item.title}</span>
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
