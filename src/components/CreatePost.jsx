import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatPost = () =>{
    // const {addPost} = useContext(PostList);

    return (
        <Form method="POST" className="create-post">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input type="text" name="userId" className="form-control" id="userId" placeholder="Enter your userId here" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" name="title" className="form-control" id="title" placeholder="Title for your post!" />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea type="text" name="body" rows="4" className="form-control" id="body" placeholder="Info about your post!!" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" name="reactions" className="form-control" id="postReactions" placeholder="Number of reactions" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" name="tags" className="form-control" id="tags" placeholder="Your hash tags!!" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    );
}

export const createPostAction = async(data) => {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);

    postData.tags = postData.tags.split(" ");

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });

    return redirect("/");
}

export default CreatPost;