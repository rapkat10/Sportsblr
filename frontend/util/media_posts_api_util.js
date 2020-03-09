export const createMediaPost = (formData) => {
    return $.ajax({
        method: "POST",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false,
    })
}

export const editMediaPost = (formData, post) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${post.id}`,
        data: formData,
        contentType: false,
        processData: false,
    })
}