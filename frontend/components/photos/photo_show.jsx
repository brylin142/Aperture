import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './comment_form_container';
import TagFormContainer from './tag_form_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleted: false }
    this.photoActions = this.photoActions.bind(this);
    this.deleteCommentButton = this.deleteCommentButton.bind(this);
    this.deleteTagButton = this.deleteTagButton.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  photoActions(currentUser) {
    if (this.props.photo.user_id === currentUser.id) {
      return (
      <div className="change-photo-container">
        <Link to={'/photos'}>
          <i title="Back to Index" class="fas fa-arrow-circle-left"></i>
        </Link>
        <Link to={`/photos/${this.props.photo.id}/edit`}>
            <i title="Edit Photo" class="fas fa-pencil-alt"></i>
        </Link>
          <i onClick={() => this.props.deletePhoto(this.props.match.params.photoId)
              .then(() => this.props.history.push('/photos'))}
            title="Delete Photo"
            class="fas fa-trash-alt">
          </i>
      </div>
      );
    } else {
      return (
        <div className="change-photo-container">
          <Link to={'/photos'}>
            <i title="Back to Index" class="fas fa-arrow-circle-left"></i>
          </Link>
        </div>
      );
    }
  }

  deleteTagButton(tag, currentUser) {
    if (this.props.photo.user_id === currentUser.id) {
      return (
        <button
          onClick={() => this.props.deleteTag(tag.id)}
          className="tag-delete">
          x
        </button>
      );
    } else {
      return null;
    }
  }

  deleteCommentButton(comment, currentUser) {
    if (this.props.photo.user_id === currentUser.id || comment.user_id === currentUser.id) {
      return (
        <button
          onClick={() => this.props.deleteComment(comment.id)}
          className="comment-delete">
          Delete
        </button>
      );
    } else {
      return null;
    }
  }
  
  render() {
    return (
      this.props.photo && this.props.user ?
      <div className="photo-container">
          <img src={this.props.photo.img_url} className="photo-show"/>

          {this.photoActions(this.props.currentUser)}

          <div className="photo-show-container">
            
            <div className="photo-show-divider">

              <div className="photo-show-wrapper">
                <h3 className="photo-show-profile">
                  <img src={this.props.user.img_url} className="photo-show-profile-pic"/>
                  
                  <div>
                    <p className="photo-show-user">{this.props.user.username}</p>
                    <p className="photo-show-title">{this.props.photo.title}</p>
                  </div>

                </h3>
                <br/>
                <br/>
                <p className="photo-show-description">{this.props.photo.description}</p>
                <br/>
                <br/> <br/>
              </div>
              
              <div className="tag-wrapper">
                <strong>Tags</strong>
                <div className="tag-container">
                  {this.props.tags.map(tag =>
                    <div className="tag-show">
                      <p key={tag.id} className="tag">{tag.label}</p>
                      {this.deleteTagButton(tag, this.props.currentUser)}
                    </div>
                  )}
                </div>
                <TagFormContainer />
              </div>

            </div>

              <div className="comments">
              <p>Comments</p>
                {this.props.comments.map((comment, idx) => 
                  
                  <div className="comment-container">
                    <img src={comment.user.img_url} key={comment.id} className="comment-profile-pic" />
                    <ul>
                      <div className="comment-remove">
                        <li className="comment-user">{comment.user.username}</li>

                        {this.deleteCommentButton(comment, this.props.currentUser)}

                      </div>
                      <li className="comment-body" key={idx}>{comment.body}</li>
                    </ul>
                  </div>
                  )}
              </div>

              <CommentFormContainer />
            </div>
          </div>
      : null
    );
  }
}

export default PhotoShow;