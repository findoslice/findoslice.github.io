'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {NotificationManager} from 'react-notifications';
//import {NotificationContainer, NotificationManager} from 'react-notifications';

import hdate from "human-date";

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPost:false};
        this.onClick = this.onClick.bind(this);
        this.copyLink = this.copyLink.bind(this);
        this.linkNotification = this.linkNotification.bind(this);
    }

    componentDidUpdate() {
        console.log("yeet")
        if (this.link) {
            NotificationManager.success('', 'Link Copied!')
            this.setState()
        }
    }

    onClick(event) {
        if (event.target.className != "fas fa-link" && event.target.className != "link"){
            this.setState({showPost: !this.state.showPost});
        }
    }

    copyLink() {
        let link = "https://findoslice.com/blog#" + this.props.content.meta.name
        var textField = document.createElement('textarea')
        textField.innerText = link
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        NotificationManager.success('Link copied!', '', 1200);
    }

    linkNotification() {
        if (this.link) {
            this.link = false;
            return NotificationManager.success('', 'Link Copied!')
        }
    }

    render() {
        let date = hdate.prettyPrint(this.props.content.meta.date, {showTime: true})
        console.log(Date.now() - Date.parse(this.props.content.meta.date))
        if (Date.now() - Date.parse(this.props.content.meta.date) < 1296000000) {
            date = hdate.relativeTime(this.props.content.meta.date)
        }
        if (this.state.showPost){
        return (
            <div className = "blogpost" id = {this.props.content.meta.name} onClick = {this.onClick}>
                <div className = "blogtitle">
                    <h2 className = "title"> {this.props.content.meta.title}  <i className = "link" onClick = {this.copyLink}>
                    <i className="fas fa-link"></i>
                </i></h2>
                    <p className = "date"> {date}</p>
                </div>
                <div dangerouslySetInnerHTML = {{__html:this.props.content.body}} />
            </div>
        )} else {
            return (
            <div className = "blogpost" id = {this.props.content.meta.name} onClick = {this.onClick}>
                <div className = "blogtitle">
                    <h2 className = "title"> {this.props.content.meta.title}  <i className = "link" onClick = {this.copyLink}>
                    <i className="fas fa-link"></i>
                </i></h2>
                    <p className = "date"> {date}</p>
                </div>
            </div>
            )}
    }
}