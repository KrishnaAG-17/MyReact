import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";

//React Component
//Class based Components - OLD
//Functional Components - NEW

//Functional Components 1
//footer


const About = lazy( () => import("./components/About"));
const Contact = lazy(() => import("./components/ContactUs"))

// root level component
const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        errorElement:<Error/>,
        children:[

            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading.......!</h1>}><About/></Suspense> ,
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1>Loading.....!</h1>}><Contact/></Suspense>,
            },
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/privacypolicy",
                element: <PrivacyPolicy/>,
            }

        ]  
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);  

