import React from 'react';
import { withRouter } from 'react-router-dom';

class TextPostsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    // update(field) {
    //     return (e) => {
    //         this.setState({ [field]: e.currentTarget.value });
    //     };
    // }

    handleSubmit(e) {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('post[post_type]', this.state.postType);
        // formData.append('post[title]', this.state.title);

        // if (this.state.formType === 'chat') {
        //     const brokenLines = this.state.body.split("\n").join("/");
        //     formData.append('post[body]', brokenLines);
        // } else {
        //     formData.append('post[body]', this.state.body);
        // }
        this.props.action(this.state).then(this.props.closeModal());
        // this.props.action(formData, this.state.postId)
        //     .then(this.props.closeModal);

    }

    render() {

        const title = <input className="title-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Title"
            />

        const body = <textarea className="body-text"
                type="text"
                value={this.state.content}
                onChange={this.handleInput("body")}
                placeholder="Your body here"
            />

        return (

            <div className="post-form-box">
                <div className="user_name">{this.props.currentUser.username}</div>
                <form className="text-form" onSubmit={this.handleSubmit}>
                    {title}
                    {body}
                    <div className="post-form-footer">
                        <button onClick={this.props.closeModal} 
                            className="close-modal">Close</button>
                        <input className="submit-post" 
                            type="submit" 
                            value={this.props.formType} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(TextPostsForm);