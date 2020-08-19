import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './sass/style.scss'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WorkIcon from '@material-ui/icons/Work';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__top">
                    <div className="sidebar__img">
                        <BrowserRouter>
                            <Link to="/"><img src={require('./img/heart_logo.svg')} alt="Logo" /></Link>
                        </BrowserRouter>
                    </div>
                </div>
                <div className="sidebar__middle">
                    <ul className="sidebar__list">
                        <li className="sidebar__item sidebar__item--user">
                            <BrowserRouter>
                                <Link to="/"><PersonIcon /></Link>
                            </BrowserRouter>
                        </li>
                        <li className="sidebar__item sidebar__item--group">
                            <BrowserRouter>
                                <Link to="/"><PeopleAltIcon /></Link>
                            </BrowserRouter>
                        </li>
                        <li className="sidebar__item sidebar__item--basket">
                            <BrowserRouter>
                                <Link to="/"><ShoppingCartIcon /></Link>
                            </BrowserRouter>
                        </li>
                        <li className="sidebar__item sidebar__item--work">
                            <BrowserRouter>
                                <Link to="/"><WorkIcon /></Link>
                            </BrowserRouter>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__bottom">
                    <ul className="sidebar__list">
                        <li className="sidebar__item sidebar__item--question">
                            <BrowserRouter>
                                <Link to="/"><HelpOutlineIcon /></Link>
                            </BrowserRouter>
                            </li>
                        <li className="sidebar__item sidebar__item--exit">
                            <BrowserRouter>
                                <Link to="/"><ExitToAppIcon /></Link>
                            </BrowserRouter>
                            </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar;