import React from 'react';
import { withRouter } from 'react-router-dom';

class EditTextPostsForm extends React.Component {
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }

    render() {

        const textForm = <>
            <textarea className="title-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Title"
            />
             <textarea className="body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder="Your text here"
            />
        
        </>;
        
        const quoteForm = <>
            <textarea className="quote-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="&ldquo;Quote&rdquo;"
            />
            <textarea className="qoute-body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder="Source"
            />
         </>;

        const linkForm = <>
            <textarea className="link-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Type or Paste a URL"
            />
            <textarea className="link-body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder="You can write something!"
            />
        </>;

        const chatForm = <>
            <textarea className="chat-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Title"
            />
            <textarea className="body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder={this.props.currentUser.username + ": Write you message!"}
            />

        </>;

        let selectedform;
        const { formType } = this.props;
        
        if (formType === 'Text Form') selectedform = textForm;
        if (formType === 'Quote Form') selectedform = quoteForm;
        if (formType === 'Link Form') selectedform = linkForm;
        if (formType === 'Chat Form') selectedform = chatForm;



        let submitClassName;
        if (this.state.title) {
            submitClassName = "submit-button";
        } else if (this.state.body) {
            submitClassName = "submit-button";
        } else {
            submitClassName = "noFileUploaded submit-button";
        }

        return (

            <div className="post-form-box">
                <div className="text-form-modal-user-pic-div">
                    <img className="text-form-modal-user-pic" 
                        src={this.props.currentUser.img_url} 
                    />
                </div>
                <form className="text-form" onSubmit={this.handleSubmit}>
                    <div className="post-form-header">
                        {this.props.currentUser.username}
                    </div>
                    {selectedform}
                    <div className="post-form-footer">
                        <button 
                            type="button"
                            onClick={this.props.closeModal}
                            className="close-button">
                            Close
                        </button>
                        <input 
                            className={submitClassName} 
                            type="submit" 
                            value="Post" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditTextPostsForm);