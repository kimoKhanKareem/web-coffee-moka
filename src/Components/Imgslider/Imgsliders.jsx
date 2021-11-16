import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { desktop, tab, promobile, mobile } from "../../responsive";
import { Link } from 'react-router-dom';




const Imgsliders = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
        <Carousel {...settings}>
            <Wrap>
            <img 
                src="./image/xbg_3.jpg.pagespeed.ic.vezfjy4tUK.webp"
                alt="img...."
            />
            <div>
                <span>Welcome</span>
                <h2 >The Best Coffee Testing Experience</h2>
                <p >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
                </p>
                <a href="##"  style={{ backgroundColor: "#c49b63" }}>
                Order Now
                </a>
                <Link to="/MENU">View Menu</Link>
            </div>
            </Wrap>
            <Wrap>
            <img
                src="./image/xbg_1.jpg.pagespeed.ic.q3FmqSxDIf.webp"
                alt="img...."
            />
            <div>
                <span>Welcome</span>
                <h2>The Best Coffee Testing Experience</h2>
                <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
                </p>
                <a href="##" style={{ backgroundColor: "#c49b63" }}>
                Order Now
                </a>
                <Link to="/MENU">View Menu</Link>
            </div>
            </Wrap>
            <Wrap>
            <img
                src="./image/xbg_2.jpg.pagespeed.ic.MyjXZaMk8H.webp"
                alt="img...."
            />
            <div>
                <span>Welcome</span>
                <h2>The Best Coffee Testing Experience</h2>
                <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
                </p>
                <a href="##" style={{ backgroundColor: "#c49b63" }}>
                Order Now
                </a>
                <Link to="/MENU">View Menu</Link>
            </div>
            </Wrap>
        </Carousel>
  );
};
export default Imgsliders;
//styled components
const Carousel = styled(Slider)`
  .slick-dots {
    display: none !important;
  }
  button {
    display: none !important;
  }
`;
const Wrap = styled.div`
  height: 750px;
  overflow: hidden;
  position: relative;
  ${desktop({ height: "550px" })}
  ${tab({ height: "450px" })}
${mobile({ height: "350px" })}
   img {
    z-index: -3;
    filter: brightness(0.4);
    position: relative;
    ${promobile({ height: "100%", width: "150%" })}
    ${mobile({ height: "100%", width: "150%" })}
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    text-align: center;
    z-index: 5;
    span {
      font-family: "Great Vibes", cursive;
      font-size: 38px;
      color: #c49b63;
      ${mobile({ fontSize: "18px" })}
    }
    h2 {
      text-transform: uppercase;
      font-size: 38px;
      color: #fff;
      font-family: "Josefin Sans";
      line-height: 1.5;
      ${tab({ fontSize: "20px" })}
      ${promobile({ fontSize: "15px" })}
           ${mobile({ fontSize: "14px" })}
    }
    p {
      color: white;
      font-size: 16px;
      font-family: "Poppins";
      line-height: 1.5;
      margin-bottom: 7%;
      ${tab({ fontSize: "13px" })}
      ${promobile({ fontSize: "8px" })}
           ${mobile({ fontSize: "8px" })}
    }
    a {
      background-color: transparent;
      border-radius: 0;
      border: 1px solid #c39a62;
      color: white !important;
      font-weight: 500;
      font-size: 15px;
      padding: 10px 20px;
      margin: 10px !important;
      padding: 20px 30px;
      &:hover {
        background-color: #c39a62;
        color: white !important;
      }

      ${tab({ padding: "10px 10px" })}
      ${promobile({ fontSize: "10px" })}
           ${mobile({ fontSize: "10px" })}
    }
  }
`;
