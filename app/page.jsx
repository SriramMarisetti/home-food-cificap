import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";
import Banner from "@/components/homes/home-food/Banner";
import Features from "@/components/homes/home-food/Features";
import Hero from "@/components/homes/home-food/Hero";
import Products from "@/components/homes/home-food/Products";
import Testimonials from "@/components/homes/home-food/Testimonials";
import Bestseller from "@/components/homes/home-food/Bestseller"
import Collections from "@/components/homes/home-food/Collection"
import Testimon from "@/components/common/Testimon"
import React from "react";
import Pickles from "@/components/common/Pickles";
import Header2 from "@/components/headers/Header2";
import VideoSwiper from "@/components/homes/home-food/VideoSwiper";
export const metadata = {
  title: "Home Food || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <Hero />
      <Bestseller />
      <Collections />
      <Products />
      <Testimon />
      <VideoSwiper />
      <Footer1 />
    </>
  );
}
