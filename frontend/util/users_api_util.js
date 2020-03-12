export const getUsers = () => {
    return $.ajax({
        url: 'api/users',
        method: 'GET'
    });
};

export const getUser = (userId) => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    });
};