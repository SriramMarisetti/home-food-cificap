import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      {/* Banner Width Text */}
      {/*<section className="flat-spacing-31">
        <div className="container">
          <div className="flat-title mb-lg text-center">
            <span className="title">
            Andhra cuisine is renowned for its bold flavors
            </span>
          </div>
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2">
            <div className="tf-image-wrap wow fadeInUp" data-wow-delay="0s">
              <Image
                className="lazyload"
                data-src="/images/slider/homefoods-features-2.jpeg"
                alt="collection-img"
                src="/images/slider/homefoods-features-2.jpeg"
                width={800}
                height={913}
              />
            </div>
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay="0s">
              <div className="item text-center text-md-start">
                <h5>Plant protein</h5>
                <p>
                  Utilise a combination of protein-rich wholefoods like legumes,
                  tempeh, nuts, and seeds to ensure your body is getting
                  everything it needs to thrive.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Natural flavours</h5>
                <p>
                  Be it by roasting or caramelising, soaking or seasoning, our
                  experienced, plant-based chefs know how to bring out the
                  natural flavours, textures, and aromas in plant-based
                  ingredients, giving them the chance to shine.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Superfoods</h5>
                <p>
                  Abundant in trending and ‘everyday’ superfoods with unique
                  health-promoting properties, Soulara meals offer a myriad of
                  vitamins, minerals, protective antioxidants, and polyphenols -
                  plant compounds with countless health benefits.
                </p>
              </div>
              <div className="item text-center text-md-start">
                <h5>Local produce</h5>
                <p>
                  To make our meals as nutrient-dense as possible, we source
                  fresh, seasonal fruits and vegetables from Australian farmers.
                  We’re all for supporting local and shortening the supply
                  chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <section>
        <div className="container mb-5 mt-5" style={{borderRadius:'30px'}}>
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2 style-2">
          <div
              className="tf-image-wrap rounded-0 wow fadeInUp"
              data-wow-delay="0s"
            >
              <Image
                className="lazyload"
                data-src="/images/slider/homefoods-features-2.jpeg"
                alt="collection-img"
                src="/images/slider/homefoods-features-2.jpeg"
                width={800}
                height={798}
                style={{borderRadius:'30px'}}
              />
            </div>
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay=".1s">
              <h4 className="text-center text-md-start">
                Andhra Pickles
              </h4>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food1.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Avakaya</h5>
                  <p>
                  The king of Andhra pickles, made with raw mango, mustard powder, red chili powder,
                   and sesame oil..
                   Stays fresh for months and pairs well with rice and ghee
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food2.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Gongura Pachadi</h5>
                  <p>
                  A spicy, tangy pickle made with Gongura (sorrel leaves), red chilies, and garlic.
                  A staple in Andhra households.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food3.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5> Tomato Pachadi</h5>
                  <p>
                  A quick and tasty pickle made with tomatoes, tamarind, mustard, and red chilies.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container"style={{borderRadius:'30px'}}>
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2 style-2">
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay=".1s">
              <h4 className="text-center text-md-start">
              Popular Andhra Podis
              </h4>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food4.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5> Guntur Karam Podi</h5>
                  <p>
                  A super spicy chili powder made with Guntur red chilies and garlic.
                  Used as a side for dosa, idli, and rice
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food5.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Karivepaku Podi</h5>
                  <p>
                  Made with dried curry leaves, red chilies, and dal.
                  Known for its rich aroma and health benefits.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food6.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Nuvvula Podi</h5>
                  <p>
                  Nuvvula Podi is a nutty, aromatic, and flavorful spice powder made with sesame seeds. 
                  It is packed with protein, calcium, and healthy fats, making it both tasty and nutritious
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tf-image-wrap rounded-0 wow fadeInUp"
              data-wow-delay="0s"
            >
              <Image
                className="lazyload"
                data-src="/images/slider/homefoods-features-1.jpeg"
                alt="collection-img"
                src="/images/slider/homefoods-features-1.jpeg"
                width={800}
                height={798}
                style={{borderRadius:'30px'}}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3" style={{borderRadius:'30px'}}>
          <div className="tf-grid-layout lg-col-2 tf-img-with-text-2 style-2">
          <div
              className="tf-image-wrap rounded-0 wow fadeInUp"
              data-wow-delay="0s"
            >
              <Image
                className="lazyload"
                data-src="/images/slider/homefoods-features-3.jpeg"
                alt="collection-img"
                src="/images/slider/homefoods-features-3.jpeg"
                width={800}
                height={798}
                style={{borderRadius:'30px'}}
              />
            </div>
            <div className="tf-content-wrap wow fadeInUp" data-wow-delay=".1s">
              <h4 className="text-center text-md-start">
               Andhra Sweets: A Taste of Tradition
                    </h4>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food7.jpeg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Pootharekulu</h5>
                  <p>
                  A sweet made with thin sheets of rice starch and stuffed with sugar, ghee, and dry fruits.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food8.jpg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Bobbatlu </h5>
                  <p>
                  A flatbread stuffed with a sweet lentil filling, typically flavored with jaggery and cardamom.
                  </p>
                </div>
              </div>
              <div className="item-list-box">
                <div className="img-box">
                  <Image
                    alt="img"
                    src="/images/collections/cls-food9.jpg"
                    width={220}
                    height={220}
                  />
                </div>
                <div className="content text-center text-md-start">
                  <h5>Kajjikayalu</h5>
                  <p>
                  Dumplings made of flour, stuffed with a mixture of coconut, jaggery, and cardamom, then deep-fried.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
