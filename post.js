const posts = [
    { tittle: 'Post 1' },
    { tittle: 'Post 2' },
    { tittle: 'Post 3' }
]

const listPosts = () => {
    posts.map(post => {
        console.log(post.tittle);
    });
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
    });
}

async function showPosts() {
    try {
        await addPost({ tittle: 'Post 4' });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();