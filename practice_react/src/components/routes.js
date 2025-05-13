import React from "react";
import Home from "../Layouts/Home";
import About from "../Layouts/About";
import Contact from "../Layouts/Contact";
import NotFound from "../Layouts/NotFound";
const routes = [
    {
        path: "/",
        element: <Home />,
        exact: true,
        name: "Home",
    },
    {
        path: "/about",
        element: <About />,
        name: "About",
    },
    {
        path: "/contact",
        element: <Contact />,
        name: "Contact",
    },
    {
        path: "*",
        element: <NotFound/>,
        name: "Contact",
    },
];

export default routes;