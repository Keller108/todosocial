import React from 'react';
import './DashboardTool.css';
import Tabs from '../Tabs/Tabs';

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
                    <button className="dashboard-delete-btn transparent-link" aria-label="delete button">
                        Удалить доску
                    </button>
                </div>
                <button className="dashboard-btn">
                    Добавить Проект
                </button>
            </div>
            <Tabs />
            <ul className="dashboard__project-list">
                <li className="dashboard__project-list-item">
                    <div className="dashboard__project-list-item-tool">
                        <h3 className="dashboard__project-list-item-title">
                            ToDoSocial
                        </h3>
                        <button className="dashboard__project-list-item-delete-btn transparent-link" aria-label="delete button"/>
                    </div>   
                    <ul className="dashboard__todo-list">
                        <button className="dashboard__todo-add-btn" type="button" aria-label="add an item"/>
                        <li className="dashboard__todo-list-item">
                        <button className="dashboard__todo-list-delete-btn" type="button" aria-label="delete button"/>
                            <p className="dashboard__project-list-item-text">
                                Нарисовать Дизайн
                            </p>
                        </li>    
                    </ul>
                </li>
                <li className="dashboard__project-list-item">
                    <div className="dashboard__project-list-item-tool">
                        <h3 className="dashboard__project-list-item-title">
                            ToDoSocial
                        </h3>
                        <button className="dashboard__project-list-item-delete-btn transparent-link" aria-label="delete button"/>
                    </div>   
                    <ul className="dashboard__todo-list">
                        <button className="dashboard__todo-add-btn" type="button" aria-label="add an item"/>
                        <li className="dashboard__todo-list-item">
                        <button className="dashboard__todo-list-delete-btn" type="button" aria-label="delete button"/>
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