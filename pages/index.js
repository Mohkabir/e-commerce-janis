import { useContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Main from "../components/Main";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import { staticProducts } from "../data/products";
import productContext from "../context/productContext";
import Footer from "../components/Footer";

export default function Home() {
  const [isError, setIsError] = useState(false);

  const {
    setProducts,
    isLoading,
    setIsLoading,
    sorProduct,
    issOpen,
    setissOpen,
  } = useContext(productContext);

  useEffect(() => {
    let mount = true;
    const fecthProducts = () => {
      try {
        if (mount) {
          setProducts(staticProducts);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fecthProducts();
    return () => {
      mount = false;
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  const handleClose = () => {
    setissOpen(!issOpen);
  };
  return (
    <div className="bg-[#f5f5f5] main_wrapper">
      {/* <div className={`${issOpen ? "sideNav" : "noNav"}`}>
        <div className="area">
          <div>
            <p>Menu</p>
            <ul>
              <li
                onClick={() => {
                  sorProduct("allProduct");
                  handleClose();
                }}
              >
                <span>VIEW ALL PRODUCTS</span>
              </li>
              <li
                onClick={() => {
                  sorProduct("topProduct");
                  handleClose();
                }}
              >
                <span>TOP PRODUCTS</span>
              </li>
              <li
                onClick={() => {
                  sorProduct("sellingStack");
                  handleClose();
                }}
              >
                <span> BEST SELLING STACK</span>
              </li>
              <li>
                <span> MY ACCOUNT</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="exit" onClick={handleClose}></div>
      </div> */}
      <Meta />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
