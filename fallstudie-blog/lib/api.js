const URL = "http://localhost:9001/api/posts"

export async function getAllPosts() {
    const response = await fetch(URL)
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const posts = await response.json();
    return posts;
}

export async function getPostById(id) {
    const response = await fetch(`${URL}/${post.id}`, {
        method: 'GET',
    });
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const post = await response.json();
    return post;
}

export async function createPost(post) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const newPost = await response.json();
    return newPost;
}

export async function updatePost(post) {
    const response = await fetch(`${URL}/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const updatedPost = await response.json();
    return updatedPost;
}

export async function deletePost(id) {
    const response = await fetch(`${URL}/${postId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        return Promise.reject(response.statusText)
    }
    const deletedPost = await response.json();
    return deletedPost;
}