import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='splash'>
        <br/><br/>
        <h1 className="splash-tagline">Find your inspiration</h1>
        <h2>Join the Aperture community and express yourself</h2>
        <br/><br/>
        <Link to='/signup' className="splash-signup">Sign Up</Link>
      </div>
    );
  }
}

export default Splash;