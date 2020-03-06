export const getPosts = () => {
    return $.ajax({
        url: "/api/posts",
        method: "GET"
    })
}

export const getPost = (id) => {
    return $.ajax({
        url: `api/posts/${id}`,
        method: "GET"
    })
}

export const createPost = (post) => {
    return $.ajax({
        url: "/api/posts",
        method: "POST",
        data: {
            post
        }
    })
}

export const updatePost = (post) => {
    return $.ajax({
        url: `api/posts/${post.id}`,
        method: "PATCH",
        data: {
            post
        }
    })
}

export const deletePost = (id) => {
    return $.ajax({
        url: `api/posts/${id}`,
        method: "DELETE"
    })
}


// export const createPost = formData => {
//     return $.ajax({
//         method: 'POST',
//         url: 'api/posts',
//         data: formData,
//         contentType: false,
//         processData: false
//     });
// };

// export const updatePost = (formData, postId) => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `api/posts/${postId}`,
//         data: formData,
//         contentType: false,
//         processData: false
//     });
// };