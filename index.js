'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Cookie from 'js-cookie';

import Construction from './js/Construction.js';
import NavBar from "./js/navbar.js";
import Blog from "./js/Blog.js";
import ContactLinks from './js/contact.js'
import Resume from './js/Resume.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {darkMode: Cookie.get("darkmode")=="true", className: Cookie.get("darkmode")=="false"?"darkmode":""}
        this.darkMode = this.darkMode.bind(this);
    }
    darkMode () {
        Cookie.set("darkmode", Cookie.get("darkmode") == "true"?"false":"true")
        console.log(Cookie.get("darkmode"))
        if (Cookie.get("darkmode") == "true"){
            document.body.className = "darkmode"
        } else {
            document.body.className = ""
        }
        this.setState({darkMode: !this.state.darkMode, className:this.state.darkMode?"":"darkmode"})
    }

    componentDidMount(){
        if (Cookie.get("darkmode") == "true") {
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
                <Switch>
                    <div id = "content" className = {this.state.className}>
                        <Route exact path="/" component={Construction}/>
                        <Route path="/about" component={Construction}/>
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

