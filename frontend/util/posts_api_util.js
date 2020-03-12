// export const getPosts = () => {
//     return $.ajax({
//         url: "/api/posts",
//         method: "GET"
//     })
// }

export const getfollowFilteredPosts = (followedFilter) => {
    return $.ajax({
        url: "/api/posts",
        method: "GET",
        data: {
            followedFilter
        }
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
