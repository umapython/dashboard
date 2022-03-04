import {React, useState,useEffect} from "react";
import './App.css'; 
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Navcomponent} from './header.js';
import {Caroselslide} from './carouselnew.js';

function Product(){
    //const {prodid} = useParams()
    //console.log(prodid+"hiuma")
    const [prods, setprods] = useState([]);

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/product/2',
      );    
      setprods(result.data);
    };
      useEffect(() => {
        fetchData();
      }, []);
      

    return(
        
            <p>hiproduct{prods}</p>
        

    )
}
export {Product};