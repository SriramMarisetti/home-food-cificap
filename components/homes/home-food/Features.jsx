"use client";
import { slides22 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-18 bg_beige-4">
      <div className="container mb-0">
        <div
          className="flat-title mb-lg text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title">
          SGL Foods: A Spicy <br />
          & Flavorful Delight
          </span>
        </div>
        <div className ="container2 mb-0">
        <div className="item">
            <img src="/images/collections/cls-food-pickles-features.jpeg" alt="Pickles"/>
            <p>Pickles</p>
        </div>
        <div className="item">
            <img src="/images/collections/cls-image-namkeen.jpeg" alt="Namkeen & Khara"/>
            <p>Namkeen & Khara</p>
        </div>
        <div className="item">
            <img src="/images/collections/cls-food7.jpeg" alt="Traditional Sweets"/>
            <p>Traditional Sweets</p>
        </div>
        <div className="item">
            <img src="/images/collections/cls-food-podillu.jpeg" alt="Masalas & Podulu"/>
            <p>Masalas & Podulu</p>
        </div>
        <div className="item">
            <img src="/images/collections/cls-food-vadiyalu.jpeg" alt="Vadiyalu & Fryums"/>
            <p>Vadiyalu & Fryums</p>
        </div>
        <div className="item">
            <img src="/images/collections/cls-image-biscuite.jpeg" alt="Biscuits & Cookies"/>
            <p>Biscuits & Cookies</p>
        </div>
        </div>
        
    
      </div>
    </section>
  );
}
