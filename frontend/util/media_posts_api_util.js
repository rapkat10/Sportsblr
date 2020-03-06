export const createMediaPost = (formData) => {
    return $.ajax({
        method: "post",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false,
    })
}

export const editMediaPost = (formData, post) => {
    return $.ajax({
        method: "patch",
        url: `/api/posts/${post.id}`,
        data: formData,
        contentType: false,
        processData: false,
    })
}