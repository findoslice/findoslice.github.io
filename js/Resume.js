import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';
import resume from "../static/CV.pdf"

export default class Resume extends React.Component {

    constructor(props){
        super(props);
        console.log("welcome to the thunder dome");
    }
    
    render() {
        if (screen.width > 650) {
            return (
                <span>
                    <div id = "cv">
                        <embed src={resume} type="application/pdf" width="100%" height="1200px" />
                    </div>
                </span>
            )
        } else {
            return (
                <div id = "cv">
                    <h1>
                        Unfortunately the embed of this cv is unavailable on mobile, you can view it <a href="https://cdn.findoslice.com/CV.pdf">here</a> though
                    </h1>
                </div>
            )
        }
    }
}
