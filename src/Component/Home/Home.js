import React, { useState } from "react";
import Data from "../../fakeData/data";
import Course from "../Course/Course";

const Home = () => {
  const [course, setCourse] = useState(Data);
  const [cart, setCart] = useState([]);
  const handleCourse = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
  };
  const totalPrice = cart.reduce((sum, item) => sum + parseInt(item.price), 0);
  return (
    <main className="container p-0">
      <header className="bg-primary p-2 mb-4">
        <h2 className="text-center text-light">online Course Home page</h2>
      </header>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {course.map((item) => (
              <Course item={item} handleCourse={handleCourse} key={item.id} />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card position-fixed border-0"
            style={{ width: "19%" }}
          >
            <div className="card-header shadow rounded bg-primary mb-1 p-1">
              <p className="font-weight-bold p-2 m-0 text-white">
                Enroll Course: {cart.length}
              </p>
              <p className="font-weight-bold text-white p-2 m-0">
                Price: ${totalPrice}
              </p>
            </div>
            <div className="card-body p-0">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="card shadow border-0 overflow-hidden bg-light mb-1 rounded"
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt=""
                        style={{ height: "3rem" }}
                      />
                    </div>
                    <div className="col-md-8 p-0">
                      <div className="card-body p-0">
                        <small className="card-title">{item.courseName}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
