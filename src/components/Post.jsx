import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({post}) =>{
    const {deletePost} = useContext(PostList);
    
    return (
        <div className="card post-card" style={ {width: "40%"} }>
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    onClick={() => {deletePost(post.id)}}>
                        <AiFillDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map((tag) => (<span key={tag} className="badge text-bg-dark hashtag">#{tag}</span>))}
                <div className="alert alert-info reactions" role="alert">
                    This post is been reacted by {post.reactions} peoples!!!
                </div>
            </div>
        </div>
    );
}

export default Post;