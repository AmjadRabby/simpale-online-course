import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Data from './Component/fakeData/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Course from './Component/Course/Course';
import Cart from './Component/Cart/Cart';

function App() {
const [cart, setCart] = useState([]);
// const data = Data ;
const [data, setData] = useState(Data);
// console.log(data);

const addToCart = (item) => {
  const newCart = [...cart, item];
  setCart(newCart)
}

const totalPrice = cart.reduce((acc, current) => acc + parseInt(current.price), 0);

  return (
                    
    <div className="">
            <div className="container-fluid px-2" >
              <h2 className="text-center py-4 logo" id="logo-name">Online Course</h2>
              <div className="row food-items">
                <div className="col-md-9 row border-right">
                  {data.map(course => <Course key={course.id} course={course} addToCart={addToCart}/>)}
                </div>
                
                <div className="col-md-3"  id="sticky-sidebar">
                  <h3 className="text-center enroll-btn">ENROLL:  {cart.length} </h3>
                  <ul className="list-group"> 
                    {cart.map(item => <Cart item={item} />)}
                  </ul>
                  <button type="button " className="btn btn-primary btn-block enroll-btn">
                  ENROLL <span className="badge badge-light">$ {totalPrice}</span>
                  </button>
                </div>
              </div>
            </div>  
    </div>
  );
}

export default App;
