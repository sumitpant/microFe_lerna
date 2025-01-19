import React from "react";
import ReactDom from "react-dom/client";
import Cart from "./Cart";

const root= ReactDom.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
       <Cart/>
    </React.StrictMode>
)