import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';

import axios from '../../axios';


class Blog extends Component {

    state={
        posts:[],
        selectedPostId:null
    }

    componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author:'P K'
                }
            })
            this.setState({
                posts:updatedPosts
            });
            // console.log(response);
        })
    }

    postelectedHandler=(id)=>{
    this.setState({
        selectedPostId :  id

    });
    }
    render () {
        const posts = this.state.posts.map(post=>{
            return   <Post
                    title={post.title}
                    key={post.id}
                    author={post.author}
                    clicked={()=>{this.postelectedHandler(post.id)}}
            />;
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;