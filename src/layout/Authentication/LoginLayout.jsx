import React from "react";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";
import Login from "../../pages/Login/Login";
import Banner from "../../pages/Shared/Banner/Banner";

const LoginLayout = () => {
  return (
    <div>
      
      <section className="grid md:grid-cols-2">
        <div className="">
          <Login></Login>
        </div>
        <div>
            <Banner></Banner>
        </div>
      </section>
    </div>
  );
};

export default LoginLayout;
