import React from "react";
import { json } from "react-router-dom";


class UserClass extends React.Component{

    constructor (props){
         super(props);
         this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy.com",
            }, 
         };
    }
    
    async componentDidMount() {
        //API Call
        const data = await fetch("https://api.github.com/users/KrishnaAG-17");
        const json = await data.json();

        this.setState(
            {
                userInfo: json,
        });
    }



   render() {

        const {name, location, avatar_url} = this.state.userInfo;

        return (

            <div className="border border-black p-2 m-2 bg-blue-100">
                <img className="w-48" src={avatar_url}/>
                <h1>Name : {name}</h1>
                <h2>Location : Gadag</h2>
                <h2>Contact : krishnagotur_17</h2>
            </div>

        )
    }
}


export default UserClass;