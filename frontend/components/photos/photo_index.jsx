import React from 'react';


class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    let photos = this.props.photos.map(photo =>
      // const col_length = this.props.photos.length / 4
      <img key={photo.id} src={photo.img_url}/>
    );

    return (
      <div className="photos-index">
        <h1>Photos</h1>
        <div className="row">{photos}</div>
      </div>
    );
  }
}

export default PhotoIndex;