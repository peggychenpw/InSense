import React, { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./landingPage.scss";

const LandingPage = () => {
  useEffect(() => {
    document.querySelector('.discover').addEventListener('click', function () {
      let scrollDown = document.querySelector(".main-picture").offsetHeight - 60
      // window.scrollTo({ left: 0, top: scrollDown, behavior: "smooth" })
      // console.log(document.scrollingElement.scrollTop, window.scrollY)

      // function scrollToTop(duration) {
      //   // cancel if already on top

      //   let scrollY = window.scrollY, oldTimestamp = null;

      //   function step(newTimestamp) {

      //     if (window.scrollY >= scrollDown) return
      //     console.log(newTimestamp)
      //     if (oldTimestamp !== null) {

      //       // if duration is 0 scrollY will be -Infinity
      //       let scrollNum = scrollY + scrollDown * (newTimestamp - oldTimestamp) / duration
      //       scrollY = scrollNum >= scrollDown ? scrollDown : scrollNum;
      //       document.scrollingElement.scrollTop = scrollY;
      //     }
      //     oldTimestamp = newTimestamp;
      //     window.requestAnimationFrame(step);

      //   }
      //   window.requestAnimationFrame(step);
      // }
      // scrollToTop(400)

      function scrollToTop2(duration) {
        // cancel if already on top

        const defaultParameter = (window.scrollY + scrollDown) / 2;
        const cosParameter = (window.scrollY - scrollDown) / 2;
        let scrollCount = 0, oldTimestamp = null;

        function step(newTimestamp) {
          // console.log(Math.cos(scrollCount))
          if (window.scrollY >= scrollDown) return

          if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            let scrollDistance = defaultParameter + cosParameter * Math.cos(scrollCount >= Math.PI ? Math.PI : scrollCount)
            // console.log(window.scrollY, scrollDistance)
            document.scrollingElement.scrollTop = scrollDistance >= scrollDown ? scrollDown : scrollDistance
          }
          oldTimestamp = newTimestamp;
          window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      }
      scrollToTop2(500)

    })
  }, [])

  return (
    // main picture
    <div className="landing-page-container position-relative">
      <div className="main-picture">
        <figure>
          <img src="/images/banner/mainpic03.jpg" alt="InSense" />
        </figure>
      </div>
      <div className="landing-page-content position-absolute">
        <h1 className="slogan1">SENSE OF ELEGANCE</h1>
        <h1 className="slogan2">SENSE OF FRAGRANCE</h1>
        {/* discover more  */}
        <div className="discover d-flex flex-direction-column justify-content-center align-items-center">
          <p>Discover More</p>
          <p className="discover-arrow">
            <FiChevronDown className="discover-arrow" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
