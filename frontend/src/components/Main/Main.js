import React from "react";
import './Main.css';
import imagePath from '../../images/blank-avatar.jpg';
import DashboardTool from "../DashboardTool/DashboardTool";

function Main () {
    return (
        <main className="main">
            <div className="profile-container">
                <div className="profile-img-wrapper">
                    <img src={imagePath} alt="avatar" className="profile-img"/>
                </div>
                <div className="profile-container__personal-info">
                    <h2 className="profile-container__title">
                        Аккаунт
                    </h2>
                    <p className="profile-container__name">
                        Никита
                    </p>
                </div>
                <div className="profile-container__border-line"></div>
                <button className="profile-container__edit-avatar-btn transparent-link">
                    Изменить аватар
                </button>
            </div>
            <div className="main__todos-container">
                <DashboardTool />
            </div>
        </main>
    )
};

export default Main;