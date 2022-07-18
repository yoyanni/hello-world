import React from "react";
import globe from "../imgs/globe.png";
import "./Header.css";

export default function Header(){
    return (
        <header className="header">
            <img src={globe} alt=""/>
            <span>my travel journal.</span>
        </header>
    )
}