import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";


import Wishlist from "@/components/othersPages/Wishlist";
import React from "react";

export const metadata = {
  title: "Wishlist || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar1 />
      <Header5 />
      <div className="tf-page-title ">
        <div className="container-full">
          <div className="heading text-center">Your wishlist</div>
        </div>
      </div>

      <Wishlist />

      <Footer1 />
    </>
  );
}
