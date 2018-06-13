import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './comment_form_container';
import TagFormContainer from './tag_form_container';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleted: false }
    this.deleteComment = this.deleteComment.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }


  deleteComment(comment) {
    this.props.deleteComment(comment.id).then(this.props.fetchPhoto(this.props.match.params.photoId));
  }
  
  render() {
    return (
      this.props.photo && this.props.user ?
        <div className="photo-container">
          <img src={this.props.photo.img_url} className="photo-show"/>
          
          <div className="change-photo-container">
            <Link to={'/photos'}>
              <img src="https://www.iconsdb.com/icons/preview/white/arrow-81-xxl.png" className="photo-show-index-link"/>
            </Link>
            <Link to={`/photos/${this.props.photo.id}/edit`}>
              <img src="https://www.iconsdb.com/icons/preview/white/edit-xxl.png" className="edit-photo"/>
            </Link>
            <img src="https://www.iconsdb.com/icons/preview/white/delete-xxl.png"
            onClick={() => this.props.deletePhoto(this.props.match.params.photoId)
              .then(() => this.props.history.push('/photos'))}
              className="delete-photo" />
          </div>

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
                    <p key={tag.id} className="tag">{tag.label}</p>
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
                        <button 
                          onClick={() => this.deleteComment(comment)} 
                          className="comment-delete">
                          Delete
                        </button>
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