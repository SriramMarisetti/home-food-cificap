"use client";
import Image from "next/image";
import { pickles } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";


export default function Pickles() {
    const { setQuickViewItem } = useContextElement();
      const {
        setQuickAddItem,
        addToWishlist,
        isAddedtoWishlist,
        addToCompareItem,
        isAddedtoCompareItem,
      } = useContextElement();
  return (
    <section
      className="flat-spacing-5 pt_0 flat-testimonial"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title">Podulu</span>
        </div>
        <div className="wrap-carousel">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-testimonial"
            spaceBetween={30} // Equivalent to data-space-lg
            slidesPerView={4} // Equivalent to data-preview
            breakpoints={{
              0: {
                slidesPerView: 1, // Equivalent to data-mobile
                spaceBetween: 15, // Equivalent to data-space-md
              },
              640: {
                slidesPerView: 2, // Equivalent to data-mobile
                spaceBetween: 15, // Equivalent to data-space-md
              },
              1024: {
                slidesPerView: 3, // Equivalent to data-tablet
                spaceBetween: 30, // Equivalent to data-space-md
              },
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".snbp3",
              nextEl: ".snbn3",
            }}
            pagination={{ clickable: true, el: ".spb3" }}
          >
            {pickles.slice(0,16).map((product) => (
            
            <SwiperSlide
              key={product.id}
              className="card-product text-center none-hover fl-item"
              style={{borderRadius:"5px"}}
            >
              <div>
                <div className="card-product-wrapper aspect-1 rounded-0">
                    <Link
                    href={`/product-detail/${product.id}`}
                    className="product-img"
                    >
                    <Image
                        className="lazyload img-product"
                        data-src={product.imgSrc}
                        alt={product.alt}
                        src={product.imgSrc}
                        width={533}
                        height={533}
                        style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}
                    />
                    </Link>
                    <div className="list-product-btn absolute-2">
                    <a
                        href="#quick_add"
                        data-bs-toggle="modal"
                        onClick={() => setQuickAddItem(product.id)}
                        className="box-icon bg_white quick-add tf-btn-loading"
                    >
                        <span className="icon icon-bag" />
                        <span className="tooltip">Quick Add</span>
                    </a>
                    <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon bg_white wishlist btn-icon-action"
                    >
                        <span
                        className={`icon icon-heart ${
                            isAddedtoWishlist(product.id) ? "added" : ""
                        }`}
                        />
                        <span className="tooltip">
                        {isAddedtoWishlist(product.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>{" "}
                        <span className="icon icon-delete" />
                    </a>

                    </div>
                </div>
                <div className="card-product-info">
                    <Link
                    href={`/product-detail/${product.id}`}
                    className="title link text-lg"
                    >
                    {product.title}
                    </Link>
                    {product.oldPrice ? (
                    <span className="price">
                        <span className="old-price text-base">
                        Rs.{product.oldPrice.toFixed(2)}
                        </span>
                        <span className="new-price price-primary text-base">
                        Rs.{product.price.toFixed(2)}
                        </span>
                    </span>
                    ) : (
                    <span className="price text-base">
                        Rs.{product.price.toFixed(2)}
                    </span>
                    )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="nav-sw nav-next-slider nav-next-testimonial lg snbp3">
            <span className="icon icon-arrow-left" />
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-testimonial lg snbn3">
            <span className="icon icon-arrow-right" />
          </div>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spb3" />
        </div>
      </div>
    </section>
  );
}