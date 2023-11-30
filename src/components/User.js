import React from "react";

const User = ( {name, Contact} ) => {
    const Address = "Sector 6, HSR layout, Bengaluru.";
    return (
        <div className="border border-black p-2 m-2 bg-blue-100">
            <h1>Name : {name}</h1>
            <h2>Address : {Address}</h2>
            <h2>Contact: {Contact}</h2>
        </div>

    );

};



export default User;