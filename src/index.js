import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/custom.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={'/testbuildreactbasic'}> 
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);