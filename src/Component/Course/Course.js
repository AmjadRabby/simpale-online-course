import React from "react";

const Course = (props) => {
    const {item, handleCourse} = props;
  const {
    courseName,
    description,
    image,
    instructor,
    price,
    language,
  } = item;
  return (
    <div className="col-4 mb-4">
      <div className="card border-0 rounded shadow " style={{ height: "26rem" }}>
        <img src={image} className="card-img-top img-fluid" alt="" />
        <div className="card-body p-2">
          <h5 className="card-title">{courseName}</h5>
          <small className="card-text text-muted d-block mb-2">{description}</small>
          <small className="text-info d-block font-weight-bold  mb-2">
            Language: {language}
          </small>
          <small className="text-info d-block font-weight-bold  mb-2">
            Instructor: {instructor}
          </small>
          <small className="text-info d-block font-weight-bold mb-2">
            Price: ${price}
          </small>
        </div>
        <div className="card-footer bg-white p-0 border-0">
          <button onClick={() => handleCourse(item)} className="btn btn-primary w-100">
            ENROLL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
