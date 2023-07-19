import { Navitems } from "constant/Navbar/text";
import { Link } from "react-scroll";
import "../css/footer.css";
import "../css/bootstrap.min.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export const Footer = () => {
  return (
    <div className="w-full h-full" id="footer">
      <div className="tm-black-bg font-primary">
        <div className="container">
          <div className="row margin-bottom-60">
            <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
              <h3 className="font-bold text-3xl">Main Menu</h3>
              <ul className="quick-links text-2xl">
                {Navitems.map((item, id) => (
                  <Link
                    key={`${item.name}.${id}`}
                    to={item.to}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="nav">{item.name}</button>
                  </Link>
                ))}
              </ul>
            </nav>

            <div className="col-lg-4 col-md-4 tm-footer-div">
              <h3 className="tm-footer-div-title text-3xl">Get Social</h3>
              <p className="text-2xl mt-5">
                " Ignite your social presence and connect with us "
              </p>
              <div className="w-full mt-5 flex flex-wrap gap-10">
                <a
                  href="https://www.facebook.com/sasuralii?mibextid=ZbWKwL"
                  target="blank"
                >
                  <BsFacebook
                    size={30}
                    className="hover:translate-y-1 hover:text-blue-500 hover:cursor-pointer transition-all"
                  />
                </a>

                <a
                  target="blank"
                  href="https://instagram.com/sasuraliktm?igshid=YmM0MjE2YWMzOA=="
                >
                  <AiOutlineInstagram
                    size={35}
                    className="hover:translate-y-1 hover:text-red-600 transition-all hover:cursor-pointer"
                  />
                </a>
                <a
                  target="blank"
                  href="https://www.tiktok.com/@sasuraliktm?_t=8dyZVVDggUs&_r=1"
                >
                  <FaTiktok
                    size={30}
                    className="hover:translate-y-1 hover:text-black transition-all hover:cursor-pointer"
                  />
                </a>
              </div>

              <div className="mt-5">
                <h1 className="tm-footer-div-title text-3xl mb-5">
                  Contact Us
                </h1>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJXLJjZnStSSDBbvqNqXvChRBtrWhqPPzKjBMLScZSbDsxrXbmgrbsJmbtcSCwCQMpqQ"
                  target="blank"
                  className="hover:text-blue-500 hover:no-underline flex items-center gap-4 transition-all hover:cursor-pointer"
                >
                  <TfiEmail size={25} /> Sasuraliktm125@gmail.com
                </a>
                <a
                  href="tel:+977974-5661355"
                  className="hover:text-blue-500 hover:no-underline flex items-center gap-4 transition-all hover:cursor-pointer mt-5"
                >
                  <FaPhoneAlt size={25} /> 974-5661355
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 tm-footer-div">
              <h3 className="tm-footer-div-title text-3xl mt-32 lg:mt-0 mb-4">
                Location
              </h3>
              <iframe
                className="w-full h-[200px]"
                title="contact"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8700786149457!2d85.37132407440663!3d27.690410126240184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4677f70b01%3A0xa8f25b94bc35b5b2!2zU2FzdXJhbGkgUmVzdHJvIOCkuOCkuOClgeCksOCkvuCksuClgA!5e0!3m2!1sen!2snp!4v1687850446842!5m2!1sen!2snp"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container font-primary font-bold text-xl">
          <div className="row tm-copyright">
            <p className="col-lg-12 text-xl copyright-text text-center">
              Copyright &copy; Sasurali Restaurant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
