//function Pet with property name, animal and breed
//import { props } from "bluebird";
import React from "react";

//The commended code does the same thing as the code below

//const Pet = (props) => {
    //return React.createElement("div", {}, [
    //React.createElement("h2", {}, props.name),
   // React.createElement("h3", {}, props.animal),
    //React.createElement("h3", {}, props.breed),
    //]);
    //};
    
    const Pet = (props) => {
        return (
            <div>
            <h2>{props.name}</h2>
            <h3>{props.animal}</h3>
            <h3>{props.breed}</h3>
            </div>
        );
    };

    export default Pet;