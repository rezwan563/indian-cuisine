import React, { useState } from "react";
import Banner from "../Shared/Banner/Banner";
import { Document, Page } from "react-pdf";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Blog = () => {
  const printRef = React.useRef();

  const handlePdfDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("blog.pdf");
  };
  return (
    <section>
      <section className="bg-img-container">
        <Banner></Banner>
        <div className="bottom-left text-3xl font-bold md:text-5xl">Blog</div>
      </section>
      <div className="w-3/4 md:w-2/3 mx-auto my-8 md:my-36">
        <div className="text-right my-4">
          <button
            onClick={handlePdfDownload}
            className="bg-amber-500 text-white px-4 py-2 shadow-lg border rounded-md"
          >Download Pdf
          </button>
        </div>

        <section ref={printRef}>
          <div className="border shadow-md dark:bg-white dark:round-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
            <p className="font-semibold mb-2 md:mb-4">
              Controlled and uncontrolled components
            </p>
            <p>
              Ans: Controlled components take their value as props from their
              parent component and change their value. Whereas, Uncontrolled
              components change their value internally. Controlled components
              eliminates previous input and set new input thus providing real
              time value change.{" "}
            </p>
          </div>
          <div className="border shadow-md dark:bg-white dark:round-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
            <p className="font-semibold mb-2 md:mb-4">
              How to validate React props using PropTypes?
            </p>
            <p>
              Ans: PropType provides a system to check the passing props is of
              desired data types. It prevents error that occur due to receiving
              improper data type as props. To use it, we have to first, install{" "}
              <i>npm i prop-types</i> then,{" "}
              <i>import PropTypes from 'prop-types'</i> where we would like to
              use it. After the component we write the following <br />
              component_name.PropType = object <br />
              key is the prop name and value is data type of prop(ex: age:
              PropType.number)
            </p>
          </div>
          <div className="border shadow-md dark:bg-white dark:round-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
            <p className="font-semibold mb-2 md:mb-4">
              Difference between nodejs and expressjs
            </p>
            <p>
              Ans: Nodejs is signle threaded platform. It runs on google v8
              engine and makes debugging easy. Howevever, it support only
              relational database. <br />
              Expressjs, on the hand, makes redis, MongoDB integration easy.
              Reduces the server setup clutter efficiently.
            </p>
          </div>
          <div className="border shadow-md dark:bg-white dark:round-md rounded-sm p-4 md:p-8 mb-2 md:mb-4">
            <p className="font-semibold mb-2 md:mb-4">
              What is a custom hook, and why will you create a custom hook?
            </p>
            <p>
              Ans: Custom hook are simply functions in react that can take
              parameters and return something. Custom hook allows to share logic
              between two function as custom hook itself is a function. It
              ensure readibility, clean code, maintainability.
            </p>
          </div>
        </section>
      </div>
      {/* ref={printRef} */}
    </section>
  );
};

export default Blog;
