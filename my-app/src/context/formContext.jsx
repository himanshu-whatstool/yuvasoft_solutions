import { createContext, useReducer } from "react";

// const [state, dispatch] = useReducer(reducer, initialState, init)

export const BlogListContext = createContext({
  postList: [],
  deletePost: () => { },
  addPost: () => { }
})

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList

  if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter(post => post.id !== action.payload.itemid)
  } else if (action.type = 'ADD_POST') {
    newPostList = [action.payload, ...currentPostList]
  }

  return newPostList;
}

const BlogListState = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, Default_postList)

  const addPost = ({ userId, name, mobile, email }) => {

    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        name: name,
        email: email,
        mobile: mobile,
      }
    })

    // console.log(`${userId} ${name} ${email} ${mobile}`);
  }

  const deletePost = (itemId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        itemid: itemId
      },
    })
    // console.log("deletepost called", dispatchPostList);
    // console.log(`delete post called for${itemid}`);
  }

  return (
    <BlogListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </BlogListContext.Provider>
  )
}

const Default_postList = [
  {
    name: '',
    email: '',
    userId: '',
    mobile: ''
  }]

export default BlogListState;


