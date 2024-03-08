import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {}
});

const postListReducer = (currPostList, action) =>{
    return currPostList;
};

const PostListProvider = ({children}) => {

    const addPost = () => {

    };

    const deletePost = () => {
        
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