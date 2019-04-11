import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar.js';

export default class Construction extends React.Component {

    constructor(props){
        super(props);
        console.log("welcome to the thunder dome");
    }
    
    render() {
        return (
            <div id="construction">
                    <div className="fas fa-wrench">
                    </div>
                    <h1>
                        Under construction...
                    </h1>
            </div>
        )
    }
}
