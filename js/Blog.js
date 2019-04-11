'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';

import BlogPost from './BlogPost.js';

export default class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts : []};
        this.posts = []
    }

    componentDidMount() {
        let results = []
        fetch("https://api.findoslice.com/posts")
            .then(response => response.json())
            .then(json => {
                json.forEach(el => {
                    console.log(typeof(el.body))
                    results.push(el);
                })
                results.sort((a, b) => {
                    return Date.parse(a.meta.date)<Date.parse(b.meta.date)?1:-1
                })
                this.setState({posts : results})
            })
    }
    
    render() {
        //this.state.posts = [{body: "<h1> I wanna kms </h1>"}]
        console.log(this.state.posts)
        return (
                <div id="blog">
                    <div id = "blog-heading">
                        <h1>My Blog</h1>
                        <p> So I guess i have a blog now, I apologise in advance before you delve deeper. This page is by no means done and will be updated in the future as I continue to procrastinate for my exams. Click <b><a href="https://random.dog" target="_blank">here</a></b> to see a dog.</p>
                    </div>
                    {this.state.posts.map((el, index) => {
                        return <BlogPost content = {el} />
                    })}
                </div>
        )
    }

}