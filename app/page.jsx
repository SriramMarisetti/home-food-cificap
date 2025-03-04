import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";
import Banner from "@/components/homes/home-food/Banner";
import Features from "@/components/homes/home-food/Features";
import Hero from "@/components/homes/home-food/Hero";
import Process from "@/components/homes/home-food/Process";
import Products from "@/components/homes/home-food/Products";
import Testimonials from "@/components/homes/home-food/Testimonials";
import Bestseller from "@/components/homes/home-food/Bestseller"
import Collections from "@/components/homes/home-food/Collection"
import React from "react";
export const metadata = {
  title: "Home Food || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Header5 />
      <Hero />
      <Bestseller />
      <Collections />
      <Products />
      <Testimonials />
      <Process />
      <Footer1 />
    </>
  );
}
