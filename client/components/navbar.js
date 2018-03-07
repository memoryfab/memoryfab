import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>memoryfab</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">HOME</Link>
            <a href="#" onClick={handleClick}>
              LOGOUT
            </a>
          </div>
          <div>
            <Link to="/parts">PARTS</Link>
            <Link to="/cars">CARS</Link>
            <Link to="/shows">SHOWS</Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGN UP</Link>
          </div>
          <div>
            <Link to="/parts">PARTS</Link>
            <Link to="/cars">CARS</Link>
            <Link to="/shows">SHOWS</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
