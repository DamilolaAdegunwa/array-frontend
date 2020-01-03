import React, { Component } from 'react';
const Home = (props) => {
    let authenticated = false;
    let signed = <ul className="navbar-nav">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Profile
        </a>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Location</a>
            <a className="dropdown-item" href="#">Pricing</a>
            <a className="dropdown-item" href="#">Explorer</a>
            <a className="dropdown-item" href="#">Market Place</a>
        </div>
    </li>
</ul>;
    let unsigned = <ul className="navbar-nav">
    <li clasName="nav-item">
        <a className="nav-link" href="#">sign in</a> 
    </li>
    <li clasName="nav-item">
        <a className="nav-link" href="#">sign up</a> 
    </li>
</ul>;
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/">Array[ ]</a>

            {/* a set of nav links */}
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" >home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >about</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">contact us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">programs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >boot camp</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">academy</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >download</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">testimonial</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Others
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Location</a>
                    <a className="dropdown-item" href="#">Pricing</a>
                    <a className="dropdown-item" href="#">Explorer</a>
                    <a className="dropdown-item" href="#">Market Place</a>
                </div>
                </li>
            </ul>

            {/* application search box */}
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
            </form>
            {authenticated ? signed : unsigned}         
        </nav>
     );
}
export default Home;