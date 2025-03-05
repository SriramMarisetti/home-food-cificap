"use client";
import Image from "next/image";
import { products52 } from "@/data/products";
import { pickles, sweets,powders } from "@/data/products";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function ProductSections() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();

  // Filter products based on categories


  return (
    <>
      {/* Podulu Swiper */}
      <ProductSwiper
        title="Podulu"
        para="Taste the essence of tradition with our handcrafted podulu"
        products={powders}
        swiperClass="podulu-swiper"
        prevBtn=".snbp-podulu"
        nextBtn=".snbn-podulu"
        paginationEl=".spb-podulu"
      />

      {/* Pickles Swiper */}
      <ProductSwiper
        title="Pickles"
         para="Experience the burst of bold flavors with our homemade pickles"
        products={pickles}
        swiperClass="pickles-swiper"
        prevBtn=".snbp-pickles"
        nextBtn=".snbn-pickles"
        paginationEl=".spb-pickles"
      />

      {/* Sweets Swiper */}
      <ProductSwiper
        title="Sweets"
         para="Delight in our authentic sweets, crafted with premium ingredients"
        products={sweets}
        swiperClass="sweets-swiper"
        prevBtn=".snbp-sweets"
        nextBtn=".snbn-sweets"
        paginationEl=".spb-sweets"
      />
    </>
  );
}

// Reusable Swiper Component
function ProductSwiper({ title,para, products, swiperClass, prevBtn, nextBtn, paginationEl }) {
  const { setQuickAddItem, addToWishlist, isAddedtoWishlist } = useContextElement();

  // Move swiperSettings inside the component
  const swiperSettings = {
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 30 },
    },
    modules: [Navigation, Pagination],
  };

  return (
    <section className="flat-spacing-5 pt_0 flat-testimonial" style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title" style={{color:"#A31D1D",fontWeight:"700"}}>{title}</span>
          <span className="text-gray-700 block" style={{fontSize:"20px"}}>"{para}"</span>

        </div>
        <div className="wrap-carousel">
          <Swiper {...swiperSettings} className={`swiper ${swiperClass}`} navigation={{ prevEl: prevBtn, nextEl: nextBtn }} pagination={{ clickable: true, el: paginationEl }}>
            {products.slice(0, 16).map((product) => (
              <SwiperSlide key={product.id} className="card-product text-center none-hover fl-item" style={{ borderRadius: "5px" }}>
                <div className="card-product-wrapper aspect-1 rounded-0">
                  <Link href={`/product-detail/${product.id}`} className="product-img">
                    <Image className="lazyload img-product" src={product.imgSrc} alt={product.alt} width={533} height={533} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                  </Link>
                  <div className="list-product-btn absolute-2">
                    <a href="#quick_add" data-bs-toggle="modal" onClick={() => setQuickAddItem(product.id)} className="box-icon bg_white quick-add tf-btn-loading">
                      <span className="icon icon-bag" />
                      <span className="tooltip">Quick Add</span>
                    </a>
                    <a onClick={() => addToWishlist(product.id)} className="box-icon bg_white wishlist btn-icon-action">
                      <span className={`icon icon-heart ${isAddedtoWishlist(product.id) ? "added" : ""}`} />
                      <span className="tooltip">{isAddedtoWishlist(product.id) ? "Already Wishlisted" : "Add to Wishlist"}</span>
                      <span className="icon icon-delete" />
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <Link href={`/product-detail/${product.id}`} className="title link text-lg">
                    {product.title}
                  </Link>
                  <span className="price text-base">Rs.{product.price.toFixed(2)}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`nav-sw nav-next-slider lg ${prevBtn.substring(1)}`} >
            <span className="icon icon-arrow-left"  />
          </div>
          <div className={`nav-sw nav-prev-slider lg ${nextBtn.substring(1)}`}>
            <span className="icon icon-arrow-right"/>
          </div>
          <div className={`sw-dots style-2 sw-pagination justify-content-center ${paginationEl.substring(1)}`} />
        </div>
      </div>
    </section>
  );
}
