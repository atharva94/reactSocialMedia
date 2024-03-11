import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatPost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'

function App() {

  const [selectedTab , setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='d-flex'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className='content'>
        <Header></Header>
        { 
          selectedTab === 'Home'
          ? <PostList></PostList>
          : <CreatPost></CreatPost>
        }
        <Footer></Footer>
      </div>
      </div>
    </PostListProvider>
  )
}

export default App