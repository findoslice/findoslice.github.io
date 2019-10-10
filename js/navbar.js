'use strict';
import lightProfile from  "../static/profile2.jpg";
import darkProfile from "../static/dark-profile.jpg";
import React from 'react';
import ReactDOM from 'react-dom';


export default class NavBar extends React.Component {
  
  constructor(props) {
    console.log("navbar constructor")
    super(props);
    this.state = {
                    paths: ['ABOUT', 'BLOG', 'CV', 'LINKS'],
                    fipps: false
                 };
    this.fipps = this.fipps.bind(this);
    // if (localStorage.darkMode == "true") {
    //   this.profile = darkProfile;
    // } else {
    //   this.profile = profile;
    // }
  }

  fipps(e){
    e.preventDefault();
    if (document.getElementById("scm").checked) {
      document.getElementByTagsName("body")[0].style.fontFace = "Fipps";
    } else {
      document.getElementByTagsName("body")[0].style.fontFace = "Merriweather";
    }
    console.log("fipps")
    this.setState({fipps: !this.state.fipps});
  }

  render() {
    let profile;
    if (localStorage.getItem("darkmode") == "true") {
      profile = darkProfile;
    } else {
      profile = lightProfile;
    }
  console.log("render");
  return (
      <span>
        <a href = "/">
          <img src = {profile}  id = "profile"></img>
          <h1>
            Findlay<br></br>Smith
          </h1>
        </a>
        <p id = "description">
          Software Engineer && Physicist
        </p>
        <div id = "navbuttons">
          {this.state.paths.map((name, i) => {
            return(<NavButton name = {name} key = {i}></NavButton>)
          })}
        </div>
        {<div id="darktoggle">
          <input type="checkbox" id="scm" name="scm" onClick={this.props.darkMode} defaultChecked={this.props.dark}></input>
          <label htmlFor="scm"> Dark Mode</label>
        </div>}
      </span>
    );
  }
}

const NavButton = (props) => {
  return (
    <a href = {"/" + props.name.toLowerCase()}>
      <div className = "navbutton">
        {props.name}
      </div>
    </a>
  );
}
