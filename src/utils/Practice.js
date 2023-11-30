// Class Based Components

import { useEffect, useState } from "react";

class App extends React.Component{

    render() {
        return(

            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

//Functional Component

const App = () => {

    return(

        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

//React Hooks 
//1) useState() - used to update the part of the DOM

const [status, setStatus] = useState("In Active");

setStatus("Active");

//2) useEffect

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetchData("https://swiggyapi.com");
    const json = data?.json();

    console.log(json);
}


//how to use useState effectively

import { useState, useEffect } from "react";

const App = () =>{

    const [name, setName] = useState("Sandy");

    return(

        <div>
            <h1>{name}</h1>
            <button onClick={() => setName("Sandeep")}>Change Name</button>
        </div>
    );
    
}