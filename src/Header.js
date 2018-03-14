/**
 * Created by jiaow on 13/03/2018.
 */
import React from 'react'
import './Header.css'
import {BrowserRouter  as Router,Route, Link} from 'react-router-dom';
import Education from './Education'

function NavigationList() {
    return (
        <div>
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
                <Education/>

        </div>

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