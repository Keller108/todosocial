import React from 'react';
import './DashboardTool.css';

function DashboardTool () {
    return (
        // <>
            // <div className="dashboard-container">
            //     <h2 className="dashboard__title">
            //         Добавьте доску
            //     </h2>
            //     <button className="dashboard-btn">
            //         Добавить доску
            //     </button>
            // </div>
        // </>
        <>
            <div className="dashboard-container">
                <div className="dashboard-tool-wrapper">
                    <h1 className="dashboard__title">
                        Моя Dashboard
                    </h1>
                    <button className="dashboard-delete-btn">
                        Удалить доску
                    </button>
                </div>
                <button className="dashboard-btn">
                    Добавить Проект
                </button>
            </div>
            <ul className="dashboard__project-list">
                <li className="dashboard__project-list-item">
                    <div className="dashboard__project-list-item-tool">
                        <h3 className="dashboard__project-list-item-title">
                            Название проекта
                        </h3>
                        <button className="dashboard__project-list-item-delete-btn" />
                    </div>   
                    <ul className="dashboard__todo-list">
                        <li className="dashboard__todo-list-item">
                            <p className="dashboard__project-list-item-text">
                                Нарисовать Дизайн
                            </p>
                        </li>    
                    </ul>
                </li>            
            </ul>
        </>
    )
};

export default DashboardTool;