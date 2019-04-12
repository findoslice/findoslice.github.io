'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Construction from './js/Construction.js';
import NavBar from "./js/navbar.js";
import DropDown from "./js/DropDown.js";
import Blog from "./js/Blog.js";
import ContactLinks from './js/contact.js'
import Resume from './js/Resume.js'
import About from './js/About.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {darkMode: localStorage.getItem("darkmode")=="true", className: localStorage.getItem("darkmode")=="false"?"darkmode":""}
        this.darkMode = this.darkMode.bind(this);
    }
    darkMode () {
        localStorage.setItem("darkmode", localStorage.getItem("darkmode") == "true"?"false":"true")
        console.log(localStorage.getItem("darkmode"))
        if (localStorage.getItem("darkmode") == "true"){
            document.body.className = "darkmode"
        } else {
            document.body.className = ""
        }
        this.setState({darkMode: !this.state.darkMode, className:this.state.darkMode?"":"darkmode"})
    }

    componentDidMount(){
        if (localStorage.getItem("darkmode") == "true") {
            document.body.className = "darkmode"
            this.setState({darkMode: true, className:"darkmode"})
        } else {
            document.body.className = ""
            this.setState({darkMode: false, className:""})
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div id="navbar" className = {this.state.className}>
                    <NavBar darkMode = {this.darkMode} dark = {this.state.darkMode}/>
                </div>
                <div id="dropdown" className = {this.state.className}>
                    <DropDown darkMode = {this.darkMode} dark = {this.state.darkMode}/>
                </div>
                <Switch>
                    <Redirect exact from="/" to="/about" />
                    <div id = "content" className = {this.state.className}>
                        <Route path="/about" component={About}/>
                        <Route path="/cv" component={Resume}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/links" component={ContactLinks}/>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}
let root = document.getElementById('root');
ReactDOM.render(<App />,
                root);

