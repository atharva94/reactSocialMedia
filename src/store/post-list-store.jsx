import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {}
});

const postListReducer = (currPostList, action) =>{
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id != action.payload.postId)
    }else if(action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({children}) => {

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags : tags,
            }
        })
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    };

    const [postList, dispatchPostList] = useReducer(postListReducer, defaultPostList);

    return (
        <PostList.Provider value={{ postList, addPost, deletePost}}>
            {children}
        </PostList.Provider>
    );
};

const defaultPostList = [{
    id : '1',
    title : 'Yo',
    body : 'Lets chill',
    reactions : 2,
    userId : 'user-9',
    tags : ['chill','enjoy']
},
{
    id : '2',
    title : 'No',
    body : 'Peace',
    reactions : 15,
    userId : 'user-12',
    tags : ['peace','bored']
}];

export default PostListProvider;