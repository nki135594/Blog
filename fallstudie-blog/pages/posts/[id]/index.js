import styles from "@components/PostForm.module.css";
import { getPostById, deletePost } from "@lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index({ session }) {

    const router = useRouter()
    const { id } = router.query
    const [post, setPost] = useState([]);

    useEffect(() => {
        if (!id) return

        try {
            getPostById(id).then((post) => setPost(post))
            console.log(post)
        } catch (e) {
            console.log(e)
        }
    }, [id]);

    return post && (
        <div>
            <ul className='posts'>
                <li key={post.id} className={`post ${styles.container}`}>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                    <Link href={`/posts/${post.id}/edit`}> <button type="submit" className={styles.editBtn}>edit</button> </Link>
                </li>
            </ul>
        </div>
    )
}