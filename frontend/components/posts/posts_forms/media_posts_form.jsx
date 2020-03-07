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
    this.handleSubmitPhoto = this.handleSubmitPhoto.bind(this);
    this.handleFileVideo = this.handleFileVideo.bind(this);
    this.handleSubmitVideo = this.handleSubmitVideo.bind(this);
    this.handleFileAudio = this.handleFileAudio.bind(this);
    this.handleSubmitAudio = this.handleSubmitAudio.bind(this);
  }

  disableSubmit() {
    return (e) => {
      e.target.setAttribute('disabled', 'disabled');
    };
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleFilePhoto(e) {
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

  handleFileAudio(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ audioFile: file, audioUrl: fileReader.result })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ audioUrl: "", audioFile: null });
    }
  }

  handleSubmitPhoto(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('post[post_type]', "Photo Form");
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
      formData.append('post[post_type]', "Video Form");
      if (this.state.body) formData.append('post[body]', this.state.body);
      formData.append('post[id]', this.state.post.id)
      formData.append('post[video]', this.state.videoFile);
      // debugger;
      this.props.action(formData, this.state.post).then(this.props.closeModal());
    }
  }

  handleSubmitAudio(e) {
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile) {
      formData.append('post[post_type]', "Audio Form");
      if (this.state.body) formData.append('post[body]', this.state.body);
      formData.append('post[id]', this.state.post.id)
      formData.append('post[audio]', this.state.audioFile);
      // debugger;
      this.props.action(formData, this.state.post).then(this.props.closeModal());
    }
  }

  render() {

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
            <p>Upload photos</p>
            <p><i className="far fa-smile">Take a selfie</i></p>
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

    const audioForm = <div>
      <input className="upload"
        type="file"
        name="file"
        id="file"
        onChange={this.handleFileAudio}
      />
      <label htmlFor="file">
        <div className="upload-file">
          <p><i className="post-camera fas fa-headphones"></i></p>
          <p>Upload a audio</p>
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
      selectedPreview = this.state.photoUrl ? <img className="media-prev" src={this.state.photoUrl} /> : null;

    }
    if (formType === 'Audio Form') {
      selectedForm = audioForm;
      selectedSubmitfunc = this.handleSubmitAudio;
      selectedPreview = this.state.audioUrl ?
      <audio className="media-prev" controls>
        <source src={this.state.audioUrl} />
      </audio>  
      : null;
    }
    if (formType === 'Video Form') {
      selectedForm = videoForm;
      selectedSubmitfunc = this.handleSubmitVideo; 
      selectedPreview = this.state.videoUrl ? 
      <video className="media-prev" controls>
        <source src={this.state.videoUrl} />
      </video>
      : null;
    }

    return (
      <div className="post-form-box">
        <div className="text-form-modal-user-pic-div">
          <img className="text-form-modal-user-pic"
            src={this.props.currentUser.img_url}
          />
        </div>
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