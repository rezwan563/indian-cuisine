import React from "react";
import Register from "../../pages/Register/Register";
import Banner from "../../pages/Shared/Banner/Banner";
import Footer from "../../pages/Shared/Footer/Footer";

const RegisterLayout = () => {
  return (
    <div>
      <section className="grid md:grid-cols-2">
        <div className="">
            <Register></Register>
        </div>
        <div>
          <Banner></Banner>
        </div>
      </section>
    </div>
  );
};

export default RegisterLayout;
