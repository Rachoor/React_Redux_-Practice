import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    render () {


        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Single Post</a>
                        </li>
                        <li>
                            <a href="/">New Post</a>
                        </li>
                    </ul>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;