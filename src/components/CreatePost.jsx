import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatPost = () =>{

    const {addPost} = useContext(PostList);

    const userId = useRef();
    const postTitle = useRef();
    const postBody = useRef();
    const reactions = useRef();
    const tagsEle = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const tags = tagsEle.current.value.split(" ");
        addPost(userId.current.value, postTitle.current.value, postBody.current.value, reactions.current.value, tags);
        userId.current.value="";
        postTitle.current.value="";
        postBody.current.value="";
        reactions.current.value="";
        tagsEle.current.value="";
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" ref={userId} className="form-control" id="userId" placeholder="Enter your userId here" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={postTitle} className="form-control" id="title" placeholder="Title for your post!" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" ref={postBody} rows="4" className="form-control" id="body" placeholder="Info about your post!!" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" ref={reactions} className="form-control" id="postReactions" placeholder="Number of reactions" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" ref={tagsEle} className="form-control" id="tags" placeholder="Your hash tags!!" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
}

export default CreatPost;