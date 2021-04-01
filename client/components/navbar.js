import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {logout} from '../store'
const handleSubmit = (evt) => {
  evt.persist()
  evt.preventDefault()
  console.log(evt)
}
const NavbarBootstrap = (props, {handleClick, isLoggedIn, userId}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Pay Eth Forward
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/awards">
            All Awards
          </Nav.Link>
          {isLoggedIn ? (
            <React.Fragment>
              <Nav.Link as={Link} to="/nominate">
                Nominate
              </Nav.Link>
              <Nav.Link as={Link} to={`/user/${userId}`}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleClick}>
                Logout
              </Nav.Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Nav.Link as={Link} to="/nominateLogin">
                Nominate
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </React.Fragment>
          )}
        </Nav>
        {props.location.pathname === '/awards' ? (
          <Nav>
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Nav>
        ) : (
          ''
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.signedInUser.id,
    userId: state.signedInUser.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(NavbarBootstrap))

/**
 * PROP TYPES
 */
