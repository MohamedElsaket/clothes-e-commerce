import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { scrollTop } from "../utils/scrollTop";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link onClick={scrollTop()} to="/clothes-e-commerce">
              Home
            </Link>
            <Link onClick={scrollTop()} to="/about">
              About Us
            </Link>
            <Link onClick={scrollTop()} to="/collection">
              Collection
            </Link>
            <Link onClick={scrollTop()} to="/contact">
              Contact
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <a
              href="https://wa.me/+201063923162/?text=Hello, I would like to contact you"
              target="_blank"
            >
              +201030848281
            </a>
            <a
              href="mailto:mohamedelsaket25@gmail.com?subject=Inquiry&body=Hello"
              target="_blank"
            >
              mohamedelsaket25@gmail.com
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm sm:text-xl text-center text-gray-500">
          Created By <span className="text-black">Mohamed Elsaket</span> in{" "}
          <span className="text-black">2024</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
