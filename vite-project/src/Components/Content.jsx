import { Component } from "react";
import Comments from "./Comments";
import Post from "./Post";

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
          comments: null,
        }
      }

    async getComments() {
        const comments = await fetch(`http://localhost:3000/comments?post-id=${this.props.post.id}`);

        return await comments.json();
    }

    componentDidMount() {
        if(this.props.post) {
            this.getComments().then(comments => this.setState({comments}))
        }
    }

    componentDidUpdate(preProps) {
        if (preProps.post.id != this.props.post.id) {
            this.getComments().then(comments => this.setState({comments}))
        }
    }

    render(){
        return(
            <div className="bg-slate-800 text-white rounded-2xl mb-8">
                <div className="text-center">
                    <Post data={this.props.post} />
                </div>
                {null != this.state.comments && <Comments data={this.state.comments}/>}
            </div>
        )
    }
}
