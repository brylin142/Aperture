import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './comment_form_container';
import TagFormContainer from './tag_form_container';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }
  
  render() {
    // console.log(this.props);
    return (
      this.props.photo && this.props.user ?
        <div className="photo-container">
          <img src={this.props.photo.img_url} className="photo-show"/>
          <div className="change-photo-container">
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
                <p>{this.props.user.first_name}</p>
              </h3>
              <br/>
              <p className="photo-show-title">{this.props.photo.title}</p>
              <br/>
              <p className="photo-show-description">{this.props.photo.description}</p>
              <br/>
              <Link to='/photos' className="photo-show-index-link">Photo Index</Link>
              <br/> <br/>
            </div>
          </div>
          <div className="tag-container">

            <TagFormContainer />
          </div>
          <ul className="comments">
            {this.props.comments.map(comment => 
              <div className="comment-container">
                <img src={this.props.user.img_url} className="comment-profile-pic" />
                <ul>
                  <li className="comment-user">{comment.user_id}</li>
                  <li className="comment-body">{comment.body}</li>
                </ul>
              </div>
            )}
          </ul>
          <CommentFormContainer />
          </div>
        </div>
      : null
    );
  }
}

export default PhotoShow;