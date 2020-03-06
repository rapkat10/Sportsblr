import React from 'react';

const PostNav = ({ currentUser, openModal }) => {

    return (
        <div className="icons-box">
            <ul className="post_buttons">
                <li onClick={() => openModal('Text Form')}>
                    <div><p className="post_button text">Aa</p><span>Text</span></div>
                </li>
                <li onClick={() => openModal('Photo Form')}>
                    <div><i className="post_button fas fa-camera"></i><span>Photo</span></div>
                </li>
                <li onClick={() => openModal('Quote Form')}>
                    <div><i className="post_button fas fa-quote-left"></i><span>Quote</span></div>
                </li>
                <li onClick={() => openModal('Link Form')}>
                    <div><i className="post_button fas fa-link"></i><span>Link</span></div>
                </li>
                <li onClick={() => openModal('Chat Form')}>
                    <div><i className="post_button fas fa-comment-alt"></i><span>Chat</span></div>
                </li>
                <li onClick={() => openModal('Audio Form')}>
                    <div><i className="post_button fas fa-headphones"></i><span>Audio</span></div>
                </li>
                <li onClick={() => openModal('Video Form')}>
                    <div><i className="post_button fas fa-video"></i><span>Video</span></div>
                </li>
            </ul>
        </div>
    )
}
export default PostNav;
