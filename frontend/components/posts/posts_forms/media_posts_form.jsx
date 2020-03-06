import React from 'react';
import { withRouter } from 'react-router-dom';

class MediaPostsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      photoFile: null,
      photoUrl: null,
      audioFile: null,
      audioUrl: null,
      videoFile: null,
      videoUrl: null
    }
    this.handleFilePhoto = this.handleFilePhoto.bind(this);
    this.handleFileVideo = this.handleFileVideo.bind(this);
    this.handleSubmitPhoto = this.handleSubmitPhoto.bind(this);
    this.handleSubmitVideo = this.handleSubmitVideo.bind(this);
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleFilePhoto(e) {
    // ability to preview a file before upload
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleFileVideo(e) {
    // ability to preview a file before upload
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ videoFile: file, videoUrl: fileReader.result })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ videoUrl: "", videoFile: null });
    }
  }

  handleSubmitPhoto(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('post[post_type]', "photo");
      if (this.state.body) formData.append('post[body]', this.state.body);
      formData.append('post[id]', this.state.post.id)
      formData.append('post[photo]', this.state.photoFile);
      // debugger;
      this.props.action(formData, this.state.post).then(this.props.closeModal());
    }
  }

  handleSubmitVideo(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('post[post_type]', "video");
      if (this.state.body) formData.append('post[body]', this.state.body);
      formData.append('post[id]', this.state.post.id)
      formData.append('post[video]', this.state.videoFile);
      // debugger;
      this.props.action(formData, this.state.post).then(this.props.closeModal());
    }
  }

  render() {
    // const preview = this.state.photoUrl ? <img className="image-prev" src={this.state.photoUrl} /> : null;

    const photoForm = <div> 
      <input className="upload"
        type="file"
        name="file"
        id="file"
        onChange={this.handleFilePhoto}
      />
        <label htmlFor="file">
          <div className="upload-file">
            <p><i className="post-camera fas fa-camera"></i></p>
            <p>Upload a photo</p>
            <p><i className="far fa-smile"></i></p>
          </div>
        </label>
    </div>

    const inputContent = (
        <textarea className="photo-body-text"
          type="text"
          value={this.state.body}
          onChange={this.handleInput("body")}
          placeholder="Add a caption, if you like"
        />
    )
    
    const videoForm = <div>
      <input className="upload"
        type="file"
        name="file"
        id="file"
        onChange={this.handleFileVideo}
      />
      <label htmlFor="file">
        <div className="upload-file">
          <p><i className="post-camera fas fa-video"></i></p>
          <p>Upload a video</p>
        </div>
      </label>
    </div>

    let selectedForm;
    let selectedSubmitfunc;
    let selectedPreview;

    const { formType } = this.props;

    if (formType === 'Photo Form') {
      selectedForm = photoForm;
      selectedSubmitfunc = this.handleSubmitPhoto;
      selectedPreview = this.state.photoUrl ? <img className="image-prev" src={this.state.photoUrl} /> : null;

    }
    if (formType === 'Audio Form') {
      selectedForm = audioForm;
    }
    if (formType === 'Video Form') {
      selectedForm = videoForm;
      selectedSubmitfunc = this.handleSubmitVideo; 
      selectedPreview = this.state.videoUrl ? <img className="image-prev" src={this.state.videoUrl} /> : null;
    }

    return (
      <div className="post-form-box">
        <form className="photo-form" onSubmit={selectedSubmitfunc}>
          <div className="post-form-header">
            {this.props.currentUser.username}
          </div>
          {selectedPreview}
          {selectedForm}
          {inputContent}
          <div className="post-form-footer">
            <button onClick={this.props.closeModal} 
              className="close-button">Close
            </button>
            <input className="submit-button" 
              type="submit" 
              value="Post" 
            />
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(MediaPostsForm);