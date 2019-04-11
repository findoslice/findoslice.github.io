'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const Icon = (props) => {
    return(
        <a href = {props.link} className = "contacticon" target="_blank">
            <div className = {props.fa}></div>
        </a>
    )
}

export default class ContactLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                    "links": {
                        "github": {
                            "link": "https://github.com/findoslice",
                            "fa": "fab fa-github"
                        },
                        "linkedin": {
                            "link": "https://www.linkedin.com/in/findlay-smith-a524a8151/",
                            "fa": "fab fa-linkedin"
                        },
                        "email": {
                            "link": "mailto:findlayksmith@gmail.com",
                            "fa": "far fa-envelope"
                        },
                        "mysterioso": {
                            "link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                            "fa": "fas fa-question"
                        }
                    }
                 }
  }

  render() {
    return (
      <span>
        <div id="contactlinks">
          <div>
            {Object.keys(this.state.links).map((key, i) => {
                return(
                    <Icon link = {this.state.links[key].link} fa = {this.state.links[key].fa} key = {i}></Icon>
                );
            })}
          </div>
        </div>
      </span>
    );
  }
}