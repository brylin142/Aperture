import React from 'react';
import { withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='splash'>
        <h1>Find your inspiration</h1>
      </div>
    )
  }
}

export default Splash;