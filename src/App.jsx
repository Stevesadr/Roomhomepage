import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import heroDesk1 from "./assets/images/desktop-image-hero-1.jpg";
import heroMobi1 from "./assets/images/mobile-image-hero-1.jpg";
import heroDesk2 from "./assets/images/desktop-image-hero-2.jpg";
import heroMobi2 from "./assets/images/mobile-image-hero-2.jpg";
import heroDesk3 from "./assets/images/desktop-image-hero-3.jpg";
import heroMobi3 from "./assets/images/mobile-image-hero-3.jpg";
import imageAboutDark from "./assets/images/image-about-dark.jpg";
import imageAboutlight from "./assets/images/image-about-light.jpg";
import arrow from "./assets/images/icon-arrow.svg";
import ChangeDataBtn from "./components/fichers/ChangeDataBtn";
const data = [
  {
    id: 0,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    images: { mobile: heroMobi1, desktop: heroDesk1 },
  },
  {
    id: 1,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    images: { mobile: heroMobi2, desktop: heroDesk2 },
  },
  {
    id: 2,
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    images: { mobile: heroMobi3, desktop: heroDesk3 },
  },
];

function App() {
  const [backgroundImage, setBackgroundImage] = useState(false);
  const [dataid, setDataid] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setBackgroundImage(isMobile ? true : false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const NextDataHnadler = () => {
    setDataid((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const pastDataHnadler = () => {
    setDataid((prev) => (prev === 0 ? 2 : prev - 1));
  };
  const currentItem = data.find((item) => item.id === dataid);
  return (
    <>
      <div className="font-mainfont">
        <div>
          <Nav />
        </div>
        <div className="md:h-screen">
          <div className="md:flex md:h-2/3">
            <div className="relative md:w-5/9 ">
              <img
                className="md:h-full md:w-full"
                src={
                  backgroundImage
                    ? data[dataid].images.mobile
                    : data[dataid].images.desktop
                }
                alt="mainimg"
              />
              <div className="md:hidden">
                <ChangeDataBtn next={NextDataHnadler} past={pastDataHnadler} />
              </div>
            </div>
            <div className="bg-white text-black p-8 md:w-4/9 relative md:p-28">
              <h1 className="text-3xl font-semibold md:text-5xl">
                {currentItem.title}
              </h1>
              <p className="text-sm text-darkgray my-5">
                {currentItem.description}
              </p>
              <label className="flex items-center text-verydarkgray text-base tracking-[0.5em] my-3 hover:text-darkgray cursor-pointer">
                SHOP NOW{" "}
                <img src={arrow} alt="arrowIcon" className="size-5 w-8 h-2" />
              </label>
              <div className="hidden md:flex">
                <ChangeDataBtn next={NextDataHnadler} past={pastDataHnadler} />
              </div>
            </div>
          </div>
          <div className="md:flex md:h-1/3">
            <div className="md:w-3/12">
              <img src={imageAboutDark} alt="imageAboutDark" />
            </div>
            <div className="bg-white text-black p-8 md:w-6/12">
              <h2 className="font-semibold md:text-xl md:tracking-widest">
                {" "}
                ABOUT OUR FURNITURE
              </h2>
              <p className="text-sm text-darkgray my-5">
                {" "}
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
            <div className="md:w-3/12 ">
              <img
                src={imageAboutlight}
                alt="imageAboutlight"
                className="md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
