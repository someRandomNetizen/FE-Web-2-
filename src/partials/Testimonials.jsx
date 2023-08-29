import React from "react";

import TestimonialImage01 from "../images/testimonial-01.jpg";
import TestimonialImage02 from "../images/testimonial-02.jpg";
import TestimonialImage03 from "../images/testimonial-03.jpg";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Testimonials() {
  const value = 5; // Fixed 5-star rating
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Một vài đánh giá từ người dùng</h2>
            <p className="text-xl text-gray-400">
              Một vài đánh giá khác từ người dùng dưới đây có thể cho bạn cái
              nhìn rõ hơn về các giá trị của ThoGioi cùng với các cốt lõi mà
              chúng tôi trân trọng.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage01}
                    width="48"
                    height="48"
                    alt="Testimonial 01"
                  />

                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <Rating
                  name=""
                  value={4.5}
                  precision={0.5}
                  readOnly
                  sx={{
                    marginLeft: "50px", // Example style property
                    paddingBottom: "15px",

                    // Add more style properties here as needed
                  }}
                />
              </div>

              <blockquote className="text-lg text-gray-400 grow">
                — Tôi đã tìm thấy những thợ làm việc tại ThoGioi rất chuyên
                nghiệp và tận tâm. Dịch vụ của họ không chỉ nhanh chóng mà còn
                rất chất lượng. Tôi đã sử dụng dịch vụ của họ để sửa chữa điện
                nhà và thực sự rất hài lòng với kết quả.
              </blockquote>

              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Khả Ly</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                ></a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage02}
                    width="48"
                    height="48"
                    alt="Testimonial 02"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <Rating
                  name=""
                  value={value}
                  readOnly
                  sx={{
                    marginLeft: "50px", // Example style property
                    paddingBottom: "15px",

                    // Add more style properties here as needed
                  }}
                />
              </div>

              <blockquote className="text-lg text-gray-400 grow">
                — Tôi thường lo lắng khi cần gọi thợ sửa điện hay sửa máy lạnh
                vì thường xuyên gặp phải các vấn đề về chất lượng dịch vụ. Nhưng
                từ khi biết đến Thợ Giỏi, mọi thứ đã thay đổi. Các thợ ở đây rất
                tận tâm và am hiểu về công việc của mình. Điều hòa của tôi đã
                được sửa một cách nhanh chóng và hiệu quả.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Trần Hoàng</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                ></a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage03}
                    width="48"
                    height="48"
                    alt="Testimonial 03"
                  />
                  <svg
                    className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                    viewBox="0 0 24 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
                <Rating
                  name=""
                  value={4.5}
                  precision={0.5}
                  readOnly
                  sx={{
                    marginLeft: "50px", // Example style property
                    paddingBottom: "15px",

                    // Add more style properties here as needed
                  }}
                />
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                — Thogioi.com thực sự là một ứng dụng tốt cho việc tìm kiếm các
                dịch vụ sửa chữa. Tôi cần một thợ sửa máy giặt và đã tìm thấy
                một thợ giỏi tại đây. Mặc dù giá cả hợp lý nhưng anh ấy đã làm
                việc rất kỹ lưỡng. Tôi chắc chắn sẽ giới thiệu trang web này cho
                bạn bè của mình.
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Trần Hoàng</cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
