'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';

import hdate from "human-date";

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPost:false};
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({showPost: !this.state.showPost});
    }

    render() {
        let date = hdate.prettyPrint(this.props.content.meta.date, {showTime: true})
        console.log(Date.now() - Date.parse(this.props.content.meta.date))
        if (Date.now() - Date.parse(this.props.content.meta.date) < 1296000000) {
            date = hdate.relativeTime(this.props.content.meta.date)
        }
        if (this.state.showPost){
        return (
            <div className = "blogpost" onClick = {this.onClick}>
                <div className = "blogtitle">
                    <h2 className = "title"> {this.props.content.meta.title} </h2>
                    <p className = "date"> {date}</p>
                </div>
                <div dangerouslySetInnerHTML = {{__html:this.props.content.body}} />
            </div>
        )} else {
            return (
            <div className = "blogpost" onClick = {this.onClick}>
                <div className = "blogtitle">
                    <h2 className = "title"> {this.props.content.meta.title} </h2>
                    <p className = "date"> {date}</p>
                </div>
            </div>
            )}
    }
}