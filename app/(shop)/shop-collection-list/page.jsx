import Footer1 from "@/components/footers/Footer1";
import Header5 from "@/components/headers/Header5";
import ShopCollections from "@/components/shop/ShopCollections";

import React from "react";

export const metadata = {
  title:
    "Product Collection List || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>

      <Header5 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">New Arrival</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>
      <ShopCollections />
      <Footer1 />
    </>
  );
}
