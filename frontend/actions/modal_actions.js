export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modalArr) => {
    const modal = modalArr[0];
    const post = modalArr[1];
    return {
        type: OPEN_MODAL,
        modal: modal,
        post: post
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    };
};
