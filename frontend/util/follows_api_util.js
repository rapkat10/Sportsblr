export const getCanFollows = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/follows`,
        method: 'GET'
    });
};

export const createFollow = (userId, followedUserId) => {
    return $.ajax({
        url: `api/users/${userId}/follows`,
        method: 'POST',
        data: {
            followedUserId
        }
    });
};

export const deleteFollow = (userId, followId) => {
    return $.ajax({
        url: `api/users/${userId}/follows/${followId}`,
        method: 'DELETE'
    });
};
