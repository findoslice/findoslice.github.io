'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Construction from './js/Construction.js';
import NavBar from "./js/navbar.js";
import Blog from "./js/Blog.js";
import ContactLinks from './js/contact.js'
import Resume from './js/Resume.js'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div id="navbar">
                    <NavBar />
                </div>
                <Switch>
                    <Route exact path="/" component={Construction}/>
                    <Route path="/about" component={Construction}/>
                    <Route path="/cv" component={Resume}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/links" component={ContactLinks}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
let root = document.getElementById('root');
ReactDOM.render(<App />,
                root);

