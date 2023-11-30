import User from "./User";
import UserClass from "./UserClass";

const About = () =>{

    return(
       <div>
            <h1 className="font-bold  pl-8 pt-4 text-xl">About</h1>
            <h2 className="font-bold pl-8 pt-4 pb-2">This is Namaste React Web Series.</h2>
            <User name={"Krishna"} Contact={"krishnagotur_"}/>
            <User name={"Raghu"} Contact={"raghu@gmail.com"}/>
            <UserClass/>
       </div> 
    );
};

export default About;