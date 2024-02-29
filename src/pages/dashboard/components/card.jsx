
import axios from "axios"
import "./card.scss"
import { useState } from "react";

export default function Card(props) {
   let x=(props.price-(props.price*.10));
    return (


        <div className="cardd">
            <img src={props.image} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title" />{props.title}
                <h3 className="card-titlee" > Price : {props.price}$ </h3>
                <h4 className="card-title" /> Discount : {x}$
                <span className="card-text" /> Category : {props.category}
            </div>
               <button > <a href="#"> Buy </a> </button>
        </div>



    )
}