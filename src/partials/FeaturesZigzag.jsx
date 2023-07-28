import React from "react";
import FeatImage01 from "../images/features-03-image-01.png";
import FeatImage02 from "../images/features-03-image-02.png";
import FeatImage03 from "../images/features-03-image-03.png";
import "./FeaturesZigzag.css"; // Import the CSS file

function FeaturesZigzag() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="tag">Reach goals that matter</div>
          <h1 className="title">One product, unlimited solutions</h1>
          <p className="subtitle">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>

        <div className="grid">
          {/* 1st item */}
          <div className="item md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="item-image max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatImage01}
                width="540"
                height="405"
                alt="Features 01"
              />
            </div>
            {/* Content */}
            <div
              className="item-content max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="item-heading">More speed. Less spend</div>
                <h3 className="item-title">Keep projects on schedule</h3>
                <p className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="item-list">
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Amet consectetur adipiscing elit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="item md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="item-image max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatImage02}
                width="540"
                height="405"
                alt="Features 02"
              />
            </div>
            {/* Content */}
            <div
              className="item-content max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-left"
            >
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="item-heading">More speed. Less spend</div>
                <h3 className="item-title">Keep projects on schedule</h3>
                <p className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="item-list">
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Amet consectetur adipiscing elit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3rd item */}
          <div className="item md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="item-image max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={FeatImage03}
                width="540"
                height="405"
                alt="Features 03"
              />
            </div>
            {/* Content */}
            <div
              className="item-content max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="item-heading">More speed. Less spend</div>
                <h3 className="item-title">Keep projects on schedule</h3>
                <p className="item-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="item-list">
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Excepteur sint occaecat</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Amet consectetur adipiscing elit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
