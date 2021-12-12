import React, { useRef, useEffect, useContext } from "react";
import Nav from "../Nav/nav";
import Productinfo from "../productinfo/productinfo";
import "./homeSelection.css";
import Spinner from '../../spinner/Spinner'
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import {
  img1Hover,
  reset,
  selectedProduct,
  description,
} from "./animations/all";
import { UIcontext } from "../uicontext";

//////////////

function Homepage() {
  const productInfo = useSelector((state) => state.products);

  const {
    setState,
    setbackground,
    productinformation,
    setincrement,
    deletebtn,
    setdeletebtn,
    selectedItem,
    setSelectedItem,
    revert,
    setrevert,
    imageindex,
    setimageindex,
    mobileinfo,
  } = useContext(UIcontext);

  const images1 = useRef(null);
  const images2 = useRef(null);
  const images3 = useRef(null);
  const images4 = useRef(null);
  const homeContainer = useRef(null);
  const morebutton = useRef(null);
  //
  useEffect(() => {
    if (!deletebtn && revert) {
      normalise(homeContainer, morebutton);
    }
  }, [revert, deletebtn, productinformation, selectedItem, imageindex]);

  const renderingRefs = (index) => {
    if (index === 0) return images1;
    if (index === 1) return images2;
    if (index === 2) return images3;
    if (index === 3) return images4;
  };
  return (
    <>
      {!productInfo.length ? (
        <Spinner className="page-loader" />
      ) : (
        <>
          <div
            className="home-selection"
            ref={homeContainer}
            style={{
              minHeight: productinformation && "0%",
              filter: mobileinfo ? "blur(300px)" : "blur(0px)",
              pointerEvents: mobileinfo ? "none" : "all",
            }}
            onMouseOut={(e) =>
              reset(
                images1.current,
                images2.current,
                images3.current,
                images4.current
              )
            }
          >
            <Nav morebutton={morebutton} />
            <div
              className="productDescriptionButton"
              ref={morebutton}
              style={{ visibility: productinformation ? "hidden" : "visible" }}
              onClick={(e) => {
                setimageindex(0);
                showDescription(
                  homeContainer,
                  morebutton,
                  e,
                  setincrement,
                  setdeletebtn
                );
              }}
            >
              View More
            </div>

            {productInfo.map((product, index) => (
              <div
                key={product._id}
                className={`select select${index + 1}`}
                ref={renderingRefs(index)}
                onClick={(e) => {
                  enableFullInterface(
                    setdeletebtn,
                    e,
                    homeContainer,
                    morebutton,
                    setState,
                    product,
                    index,
                    setSelectedItem,
                    setrevert
                  );
                }}
                onMouseEnter={(e) => {
                  setbackground(product.color);
                  img1Hover(
                    e.target,
                    images1.current,
                    images2.current,
                    images3.current,
                    images4.current
                  );
                }}
              >
                <img
                  className={`img img${index + 1}`}
                  src={product.relatedImages[imageindex]}
                  alt={`product ${index}`}
                  style={{ pointerEvents: "none" }}
                />

                <div
                  className={`pname product-name${index + 1}`}
                  style={{
                    visibility: productinformation ? "hidden" : "visible",
                    color:
                      index === 0 || index === 2 ? product.background : "white",
                  }}
                >
                  {product.name} <br /> <div>{product.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <Productinfo />
        </>
      )}
    </>
  );
}

export default Homepage;

/////////////
function enableFullInterface(
  setdeletebtn,
  e,
  homeContainer,
  morebutton,
  setState,
  product,
  index,
  setSelectedItem,
  setrevert
) {
  setdeletebtn(true);
  selectedProduct(e.target, homeContainer.current, morebutton.current);
  setState({
    id: product._id,
    name: product.name,
    sub: product.sub,
    color: product?.color,
    price: product.price,
    countInStock: product.countInStock,
    description: product.description,
    ProductColor: product.ProductColor,
    background: product.background,
    image: product.image,
    productCode: product.productCode,
    header: product.header,
    numOfReviews: product.numOfReviews,
    rating: product.rating,
    relatedimages: product.relatedImages,
    sizes: product.sizes,
    specifications: product.specifications,
    index,
  });
  setSelectedItem(e.target);
  setrevert(false);
}

function showDescription(
  homeContainer,
  morebutton,
  e,
  setincrement,
  setdeletebtn
) {
  description(homeContainer.current, morebutton.current, setdeletebtn);
  setTimeout(
    setincrement((prevshowincrement) => !prevshowincrement),
    2000
  );
  e.target.classList.contains("move")
    ? (e.target.textContent = "Close Info")
    : (e.target.textContent = "View More");
}

function normalise(homeContainer, morebutton) {
  homeContainer.current.style.pointerEvents = "all";
  homeContainer.current.classList.remove("shrink");
  morebutton.current.classList.remove("center");
  morebutton.current.classList.remove("move");
}
