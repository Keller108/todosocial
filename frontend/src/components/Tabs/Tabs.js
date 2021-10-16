import React from "react";
import './Tabs.css';

function Tabs() {
    return (
        <ul className="dashboard__tabs">
            <li className="dashboard__tab-item">
                <button className="tab-btn tab-btn_active" type="button" aria-label="add the todo"/>
            </li>  
            <li className="dashboard__tab-item">
                <button className="tab-btn" type="button" aria-label="add the todo"/>
            </li>    
        </ul>
    )
};

export default Tabs;