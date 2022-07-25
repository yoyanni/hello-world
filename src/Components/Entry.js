import React from "react";
import gps from "../imgs/gps.png";
import "./Entry.css";

export default function Entry(prop){
    return (
        <div className="entry--outer">
            <div className="entry--inner">
                <img src={process.env.PUBLIC_URL + prop.img} alt="img did not come through" className="entry--img"/>
                <div className="entry--info">
                    <div className="entry--location">
                        <span><img src={gps} alt=""/>{prop.location}</span>
                        <a href={prop.link}>View on Google Maps</a>
                    </div>
                    <p className="entry--title">{prop.title}</p>
                    <p className="entry--date">{prop.startDate} - {prop.endDate}</p>
                    <p className="entry--desc">{prop.desc}</p>
                </div>
            </div>
            <hr/>
        </div>
    )
}