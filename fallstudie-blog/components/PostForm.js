import { useEffect, useState } from "react"
import styles from "./PostForm.module.css"
import { useRouter } from "next/router"
import "../pages/posts/create"
import { createPost, updatePost } from "@lib/api"

const defaultModel = {
    title: "",
    text: ""
}

function validateModel(post) {
    const errors = {
        title: "",
        text: ""
    }
    let isValid = true

    // Hier musst du den Post validieren und die Fehlermeldung auf dem errors Objekt setzen
    // Wenn der Post nicht valide ist, musst zu auch isValid = false setzen.
    // denn Aufruf findest du in der Funktion handleSubmit unten

    //title
    if(post.title.length < 10) {
        isValid = false;

        errors['title'] = {
            title: 'title',
            text: post.title,
            message: "Title too short. Must be at least 10 characters."
        }
    }

    //text
    if(post.text.length < 20) {
        isValid = false;

        errors['text'] = {
            title: 'text',
            text: post.text,
            message: "Paragraph too short. Must be at least 20 characters."
        }
    }

    return { errors, isValid }
}

export default function PostForm({ postToEdit }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    const [post, setPost] = useState(defaultModel)

    useEffect(() => {
        if (postToEdit) {
            setPost(postToEdit)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(post)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        if (post.id) {
            // Post updaten
            await updatePost(post)
            alert()
            router.push("/")

        } else {
            await createPost(post)
            alert("Form has been submitted")
            router.push("/")
        }

        setIsLoading(false)
    }

    return (
        <div className={styles.postform}>
        <form onSubmit={handleSubmit} className={styles['post-form']}>
            <fieldset>
                <label>Title:</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} />
                {errors.title && <div className={styles.errormsg}>{errors.title}</div>}
            </fieldset>

            <fieldset>
                <label>Text:</label>
                <textarea name="text" value={post.text} onChange={handleChange} />
                {errors.text && <div className={styles.errormsg}>{errors.text}</div>}
            </fieldset>

            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
    )
}