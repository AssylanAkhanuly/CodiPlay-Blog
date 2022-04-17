import Header from '../../components/header/Header.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Posts from '../../components/posts/Posts.jsx'
import "./home.css";
import {useState, useEffect} from 'react'
import { useLocation } from "react-router";
import axios from 'axios'

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts"+search)
      setPosts(res.data)
    }

    fetchPosts()
  }, [search])
  return (
    <>
    <Header/>
    
      <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
      </div>
    </>
  );
}
