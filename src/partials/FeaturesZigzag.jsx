import React from "react";
import FeatImage01 from "../images/features-03-image-01.png";
import FeatImage02 from "../images/features-03-image-02.png";
import FeatImage03 from "../images/features-03-image-03.png";
import Plumber1 from "../images/plumber1.jpg";
import Plumber2 from "../images/plumber2.jpg";
import Plumber3 from "../images/plumber3.jpg";

import "./FeaturesZigzag.css"; // Import the CSS file

function FeaturesZigzag() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="tag">Ống nước bạn quan trọng</div>
          <h1 className="title">ThoGioi, Bạn của mọi nhà</h1>
          <p className="subtitle">
            Với kinh nghiệm làm việc lâu đời và đội ngũ thợ chất lượng, ThoGioi
            tự tin là một trong những dịch vụ đầu ngành
          </p>
        </div>

        <div className="grid">
          {/* 1st item */}
          <div className="item md:grid md:grid-cols-12 md:gap-6 items-center mb-8">
            {/* Image */}
            <div
              className="item-image max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={Plumber1}
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
                <div className="item-heading">Chất lượng tuyệt đối</div>
                <h3 className="item-title">Luôn đảm bảo chất lượng</h3>
                <p className="item-description">
                  Giá trị cốt lõi mà ThoGioi đặt lên hàng đầu là chất lượng dịch
                  vụ. Những người thợ của chúng tôi sẽ cung cấp cho bạn giải
                  pháp tối ưu nhất và tiết kiệm chi phí nhất.
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
                    <span>Giải pháp tối ưu</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Tiết kiệm chi phí</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Hoạt động bền vững</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2nd item */}
          <div className="item md:grid md:grid-cols-12 md:gap-6 items-center mb-8">
            {/* Image */}
            <div
              className="item-image max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
              data-aos="fade-up"
            >
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={Plumber2}
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
                <div className="item-heading">Làm việc nhanh chóng</div>
                <h3 className="item-title">Tốc độ vượt trội</h3>
                <p className="item-description">
                  Các chuyên gia ở ThoGioi luôn đảm bảo rằng tốc độ đi đôi với
                  chất lượng công việc. Qua đó đem đến trải nghiệm tốt nhất cho
                  người dùng
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
                    <span>Nhanh chóng nhưng chất lượng</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Bảo đảm an toàn</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Bảo hành chu đáo</span>
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
                src={Plumber3}
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
                <div className="item-heading">Khách hàng là nhất</div>
                <h3 className="item-title">Quan tâm trải nghiệm của bạn</h3>
                <p className="item-description">
                  Tiêu chí của ThoGioi luôn đặt khách hàng lên trên hết. Với
                  chúng tôi, khách hàng luôn đúng trong mọi trường hợp từ lớn
                  nhất đến nhỏ nhất
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
                    <span>Hết mình vì bạn</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Tận tâm phục vụ</span>
                  </li>
                  <li>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Ghi nhận đánh giá của bạn</span>
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
