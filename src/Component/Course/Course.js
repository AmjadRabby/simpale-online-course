import React from 'react';
import './Course.css';

const Course = (props) => {
    const {coursename, image, description, price,language, instructor} = props.course;
    // console.log(course)
    return (
        <div className="course-container col-md-4 ">
            <div className="">
                <div className=" my-4">
                    <div className="card p-2 ">
                            <img className="card-img-top" src={image} />
                         <div className="card-body">
                            <h5>{coursename}</h5>
                            <p className="card-title text-muted"><small>{description}</small></p>
                            <p className="text-muted"><small>{language}</small></p>
                            <p className="text-muted"><small >INSTRUCTOR: {instructor}</small></p>
                            <p className="price text-muted">${price}</p>
                            <button className="btn btn-sm btn-primary text-center main-btn"
                            onClick={ () =>props.addToCart(props.course)}>ENROLL NOW</button>
                         </div>
                    </div>
                 </div>
             </div>
             <div>
                 
             </div>

        </div>
    );
};

export default Course;