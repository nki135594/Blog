import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "@components/Navigation.module.css"
import { getAllPosts } from "@lib/api"
import { useRouter } from "next/router"

export default function PostsPage() {
    const [posts, setPosts] = useState([])

    const router = useRouter()
    const { id } = router.query
    useEffect(async () => {
        const response = getAllPosts()
         .then(response => {
            response.json()
            setPosts(posts)
         })
    }, [id])
    
    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <p key={post.text} href={`/posts/${post.text}`}>
                            <div>
                                <p className = {styles.titles2} >{post.title}</p>
                                <p className = {styles.texts2}>{post.text}</p>
                                <br /><br />
                            </div>
                        </p>
                    )
                })
            }
        </div>
    )
}