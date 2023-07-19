import "../css/home.css";
import "../css/bootstrap.min.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { CarouselUI, Footer } from "components";
import bg2 from "../image/bg2.png";
import bg1 from "../image/bg.png";
import { useSelector } from "react-redux";
import AdminPanel from "admin/AdminPanel";
import Aos from "aos";
import "aos/dist/aos.css";

const slideImages = [
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123920848013766776/menu1.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123920974463643749/menu3.jpg",
  "https://cdn.discordapp.com/attachments/1123144974683361401/1123921092021600348/menu4.jpg",
];

const aboutImages = [
  "https://cdn.discordapp.com/attachments/1101558092786835589/1129289577924939806/happy-waiter-serving-food-group-cheerful-friends-pub.jpg",
  "https://cdn.discordapp.com/attachments/1101558092786835589/1129289712465612800/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling.jpg",
  "https://cdn.discordapp.com/attachments/1101558092786835589/1129289731658760242/restaurant-interior_1.jpg",
];

export const Home = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {!isAdmin ? (
        <>
          <div className="h-full w-full font-primary overflow-x-hidden">
            <section className="tm-welcome-section" id="/">
              <img
                src={bg2}
                alt="sasurali"
                className="relative w-full h-[650px] object-cover"
              />
              <div className="w-full h-[650px] bg-gradient-to-tr from-black absolute top-0 left-0"></div>
              <div className="absolute top-72 lg:top-40 w-full">
                <img
                  className="w-[500px] object-contain mx-auto relative"
                  src={bg1}
                  alt="sasurali"
                />
                <div className="relative bottom-[20rem] lg:bottom-[31rem] mx-auto">
                <div className="fade-up"  >
                  <h1 className="white-text text-4xl  ">
                    Welcome To <br />
                    <span className="text-slate-50 text-[50px] lg:text-[60px] effect">
                      Sasurali
                    </span>
                  </h1>
                  <Link
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="reserve"
                  >
                    <button className="hover:cursor-pointer  mt-6 lg:mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl px-16 py-6 lg:px-20 animate-slide-up">
                      Details
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            </section>
            <div className="pt-10 light-gray-bg px-5">
              {/* sasurali about page */}
              <section
                id="/about"
                className="flex w-full lg:px-72 flex-col lg:flex-row gap-16 lg:gap-10"
              >
                <div
                  data-aos="fade-up-right"
                  className="basis-full lg:basis-[50%]"
                >
                  <h2 className="text-[30px] font-bold w-full mb-4">
                    Sasurali's Flavors of Nepal: A Feast for the Senses
                  </h2>
                  <p className="text-justify text-xl lg:text-2xl w-full">
                    Embark on a remarkable culinary adventure at Sasurali's
                    Flavors of Nepal, where the rich heritage and passion of
                    Nepali cuisine come alive. Discover a symphony of vibrant
                    spices, tantalizing textures, and captivating flavors that
                    transport you to the majestic landscapes of Nepal. Our
                    exceptional hospitality ensures a memorable dining
                    experience, leaving a lasting impression that lingers long
                    after the final bite. Reserve your table now and indulge in
                    a sensory feast that will ignite your taste buds and create
                    cherished memories. Experience the fusion of tradition and
                    elegance in our inviting ambiance, where every dish tells a
                    tale of culinary excellence. Join us at Sasurali's Flavors
                    of Nepal for an extraordinary journey through the
                    flavors of Nepal.
                  </p>

                  <Link
                    className="hover:cursor-pointer"
                    to="/"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="hover:cursor-pointer mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl py-6 px-12">
                      Read More
                    </button>
                  </Link>
                </div>
                <div
                  data-aos="fade-up-left"
                  className="basis-full lg:basis-[50%]"
                >
                  <CarouselUI
                    slideImages={aboutImages}
                    width="500"
                    height="400"
                    indicator={true}
                    status={false}
                    arrows={false}
                  />
                </div>
              </section>

              {/* popular items */}
              <section className="tm-section tm-section-margin-bottom-0 row mt-10 px-5">
                <div className="col-lg-12 tm-section-header-container">
                  <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                    Popular Items
                  </h2>
                  <div className="tm-hr-container">
                    <hr className="tm-hr" />
                  </div>
                </div>

                {/* each popular item (3) */}
                <div className="flex justify-around flex-wrap w-full">
                  <div
                    data-aos="flip-up"
                    className=" bg-white rounded-2xl w-full md:w-[400px] mb-[7rem]"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165922607134/plate-food-with-bowl-red-sauce-it.jpg"
                      alt="Popular"
                      className="tm-popular-item- overflow-hidden rounded-2xl w-fit mx-auto h-[200px]"
                    />
                    <div className="tm-popular-item-description">
                      <h3 className="tm-handwriting-font tm-popular-item-title">
                        <span className="tm-handwriting-font bigger-first-letter">
                          M
                        </span>
                        omo
                      </h3>
                      <hr className="tm-popular-item-hr" />
                      <p className="text-2xl md:mt-10 font-primary">
                        Momo lovers rejoice! Get ready to tantalize your taste
                        buds with the exquisite flavors of momos. Hailing from
                        the Himalayan regions, momos have captured the hearts
                        and palates of food enthusiasts worldwide.
                      </p>
                      <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                        <p
                          // href
                          className="order-now-link tm-handwriting-font hover:cursor-pointer"
                        >
                          Order Now
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="flip-up"
                    className="bg-white rounded-2xl w-ful md:w-[400px] mb-[7rem]"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183166677602304/burger-with-flying-elements.jpg"
                      alt="Popular"
                      className="tm-popular-item- overflow-hidden rounded-2xl w-fit h-[200px] object-contain mx-auto"
                    />
                    <div className="tm-popular-item-description">
                      <h3 className="tm-handwriting-font tm-popular-item-title">
                        <span className="tm-handwriting-font bigger-first-letter">
                          B
                        </span>
                        urger
                      </h3>
                      <hr className="tm-popular-item-hr" />
                      <p className="text-2xl md:mt-10 font-primary">
                        Get ready to sink your teeth into pure bliss with our
                        mouthwatering burgers. We proudly present a culinary
                        masterpiece that has stood the test of time and
                        continues to captivate taste buds everywhere
                      </p>
                      <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                        <p
                          // href
                          className="order-now-link tm-handwriting-font hover:cursor-pointer"
                        >
                          Order Now
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="flip-up"
                    className="bg-white rounded-2xl w-full md:w-[400px] mb-[7rem]"
                  >
                    <img
                      src="https://cdn.discordapp.com/attachments/1123144974683361401/1123184299340992573/red-martini-cocktail-with-splash-lime-isolated.jpg"
                      alt="Popular"
                      className="tm-popular-item- overflow-hidden rounded-2xl w-fit mx-auto h-[200px]"
                    />
                    <div className="tm-popular-item-description">
                      <h3 className="tm-handwriting-font tm-popular-item-title">
                        <span className="tm-handwriting-font bigger-first-letter">
                          M
                        </span>
                        ocktail
                      </h3>
                      <hr className="tm-popular-item-hr" />
                      <p className="text-2xl md:mt-10 font-primary">
                        Step into a world of delightful refreshment with our
                        exquisite mocktails. These non-alcoholic wonders are
                        carefully crafted to tantalize your taste buds and
                        invigorate, offering a vibrant and flavorful experience
                        like no other.
                      </p>
                      <div className="order-now-container mt-10 ml-[4.5rem] lg:ml-20">
                        <p
                          // href
                          className="order-now-link tm-handwriting-font hover:cursor-pointer"
                        >
                          Order Now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* special items */}
              <section
                className="tm-section tm-section-margin-bottom-0 row mt-10 px-5"
                id="special"
              >
                <div className="col-lg-12 tm-section-header-container">
                  <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                    Special Menu
                  </h2>
                  <div className="tm-hr-container">
                    <hr className="tm-hr" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 mb-5">
                    <div className="tm-special-item">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="tm-special-img-container "
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                          alt="Special"
                          className="h-[300px] rounded-md"
                        />
                        <div className="tm-special-description font-primary">
                          <h3 className="mb-5 text-3xl lg:text-4xl bold">
                            Chowmein
                          </h3>
                          <p className="text-xl">
                            Prepare to embark on a culinary journey that will
                            awaken your senses and leave you craving more.
                            Introducing Chowmein, a beloved dish that combines
                            the simplicity of noodles with a burst of
                            tantalizing flavors.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tm-special-item">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="tm-special-img-container"
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183165171830884/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg"
                          alt="Special"
                          className="h-[300px] rounded-md"
                        />
                        <div className="tm-special-description font-primary">
                          <h3 className="mb-5 text-3xl lg:text-4xl bold">
                            Chowmein
                          </h3>
                          <p className="text-xl">
                            Prepare to embark on a culinary journey that will
                            awaken your senses and leave you craving more.
                            Introducing Chowmein, a beloved dish that combines
                            the simplicity of noodles with a burst of
                            tantalizing flavors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mx-auto w-fit gap-5">
                    <div className="tm-special-item rounded-md">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="tm-special-img-container"
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123186476100882515/image-removebg-preview.png"
                          alt="Special"
                          className="h-[300px] rounded-md bg-gradient-to-tr from-black"
                        />
                        <div className="tm-special-description font-primary">
                          <p className="mb-5 text-2xl lg:text-4xl bold">
                            Thali set
                          </p>
                         
                          <p className="text-base">
                            From the moment your Thali Set arrives at your
                            table, you are transported to a world of culinary
                            delights. The platter is adorned with an array of
                            small bowls.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tm-special-item rounded-md">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="tm-special-img-container"
                      >
                        <img
                          src="https://cdn.discordapp.com/attachments/1123144974683361401/1123196028393365567/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon-removebg-preview.png"
                          alt="Special"
                          className="h-[300px] rounded-md bg-gradient-to-tr from-black"
                        />
                        <div className="tm-special-description font-primary">
                          <p className="mb-5 text-2xl lg:text-4xl bold">
                            Burger
                          </p>
                          <p className="text-base lg:text-xl">
                            At our restaurant, we take the art of burger-making
                            seriously. Each burger is crafted with meticulous
                            care and passion, ensuring a symphony of flavors in
                            every bite.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* menu */}
              <section
                className="tm-section tm-section-margin-bottom-0 row mt-20 px-5 py-10"
                id="menu"
              >
                <div className="col-lg-12 tm-section-header-container">
                  <h2 className="w-full mb-2 lg:mb-12 lg:w-[200px] font-primary font-bold text-3xl">
                    Daily Menu
                  </h2>
                  <div className="tm-hr-container">
                    <hr className="tm-hr" />
                  </div>
                </div>
                <div className="w-full px-5">
                  <div className="flex flex-wrap lg:flex-nowrap lg:gap-52 w-full">
                    <div className="lg:basis-[40%]">
                      <CarouselUI
                        slideImages={slideImages}
                        width="500"
                        height="500"
                        indicator={true}
                        status={true}
                        arrows={true}
                      />
                    </div>
                    <div className="mt-10 lg:mt-0">
                      <p className="text-4xl font-bold">
                        Delight your Taste Buds with our Exquisite Menu!
                      </p>
                      <ol className="my-5 text-3xl font-bold">
                        <li className="my-10">Momo</li>
                        <li className="mb-10">Chowmein</li>
                        <li className="mb-10">Thali set</li>
                        <li className="mb-10">Soft and Hard Drinks</li>
                        <li className="mb-10">Hukka</li>
                        <li className="mb-10">Ice Cream</li>
                      </ol>
                      <Link
                        className="hover:cursor-pointer"
                        to="/"
                        activeclassname="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <button className="hover:cursor-pointer mt-10 bg-primary hover:bg-violet-500 transition-all text-white rounded-lg text-xl md:text-2xl py-6 px-20">
                          See More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <AdminPanel />
      )}
    </>
  );
};
