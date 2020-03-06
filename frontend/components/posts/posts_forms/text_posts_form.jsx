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
        this.props.action(this.state).then(this.props.closeModal());
    }

    render() {

        const textForm = <>
            <input className="title-text"
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
            <textarea className="body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder="Source"
            />
         </>;

        const linkForm = <>
            <input className="link-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Type or Paste a URL"
            />
        </>;

        const chatForm = <>
            <input className="title-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Title"
            />
            <textarea className="body-text"
                type="text"
                value={this.state.body}
                onChange={this.handleInput("body")}
                placeholder="Write you message!"
            />

        </>;

        let selectedform;
        const { formType } = this.props;
        
        if (formType === 'Text Form') selectedform = textForm;
        if (formType === 'Quote Form') selectedform = quoteForm;
        if (formType === 'Link Form') selectedform = linkForm;
        if (formType === 'Chat Form') selectedform = chatForm;

        return (

            <div className="post-form-box">
                {/* <div className="user_name">
                    {this.props.currentUser.username}
                </div> */}
                <form className="text-form" onSubmit={this.handleSubmit}>
                    <div className="post-form-header">
                        {this.props.currentUser.username}
                    
                    </div>
                    {selectedform}
                    <div className="post-form-footer">
                        <button 
                            onClick={this.props.closeModal} 
                            className="close-button">
                            Close
                        </button>
                        <input 
                            className="submit-button" 
                            type="submit" 
                            value="Post" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(TextPostsForm);