import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link,BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Product} from './product.js';
import {Navcomponent} from './header.js';
import {Caroselslide} from './carouselnew.js';



function App(){
  
  const [prodlist, setprodlist] = useState([]);
  const [prods, setprods] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      'http://localhost:5000/time',
    );    
    setprodlist(result.data);
  };
    useEffect(() => {
      fetchData();
    }, []);

    const fetchprod = async () => {
      const result = await axios(
        'http://localhost:5000/product/2',
      );    
      setprods(result.data);
    };
      useEffect(() => {
        fetchprod();
      }, []);
      
    
     console.log("uma"+prodlist);
  return (

    <div className="App">
      <Navcomponent />
      <Caroselslide />
      <Router>
      <ul>
      {prodlist.map((item) => (
        <li key={item.id}><Link to={{pathname:'/product',state:item.id}}>{item.product}</Link></li>
        
      ))}
    </ul>

      </Router>
      {/* <p>Hi</p> */}
      {/* <p>{prods.prodnum}</p> */}
    </div>
  );
}

export default App;
