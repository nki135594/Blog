import React from "react";
import Link from "next/link";
import styles from "../components/Navigation.module.css"
import "../pages/posts/create"
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { getAllPosts } from "@lib/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index_Posts() {
const [posts, setPosts] = useState([])
const [error, setError] = useState(false)

  useEffect(() => {
    async function fetch() {
        try {
            const data = await getAllPosts()
            setPosts(data)
        } catch(e) {
            setError(true)
        }
    }
    fetch()
}, [])



return (
  <div>
    <Header />
    <div>
      <Navigation />
      <div>
          <Link href="./posts/create">Create New Post</Link>
      </div>
      <div>
          <h2>
            {posts.length} Posts
          </h2>
          <div className = {styles.posts} >
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`}>
              <p className = {styles.titles} >{post.title}</p>
              <p className = {styles.texts}>{post.text}</p>
              <br></br>
            </Link>
          ))}
          </div>
      </div>
    </div>
  </div>
);
}