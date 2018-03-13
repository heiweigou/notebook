/**
 * Created by jiaow on 13/03/2018.
 */
import React from 'react'
import './Header.css'
import {BrowserRouter  as Router,Route, Link} from 'react-router-dom';


function NavigationList() {
    return (
        <Router>
        <ul className="navList">

            <li className="navItem"><a ref='#'>Home</a></li>
            <li className="navItem"><a ref='#'>Education</a></li>
            <li className="navItem"><a ref='#'>Work Experience</a></li>
            <li className="navItem"><a ref='#'>Contact Me</a></li>
            <li className="navItem"><a ref='#'>About</a></li>

                <li className="search float-right">

                    <input className="form-control"/>
                    <a className="search-btn" ref='#'>search</a>

                </li>

        </ul>

        </Router>
    )
}

class Header extends React.Component {
    render() {
        return (
            <div>
                {NavigationList()}

            </div>
        )
    }
}

export default Header