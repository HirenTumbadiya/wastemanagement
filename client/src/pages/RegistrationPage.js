import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
// import "../global.css";

class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
this.props.loginUser(userData);
  };

// const RegistrationPage = () => /{
  // const navigate = useNavigate();

  // const onDontHaveAnClick = useCallback(() => {
    // navigate("/registration-page");
  // }, [navigate]);
  render() {
  return (
    <div className="registration-page">
      <img
        className="digital-screen-with-environmen-icon"
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <div className="welcome-back">Welcome back</div>
      <div className="please-enter-your">Please enter your detail</div>
      <form className="sign" noValidate onSubmit={this.onSubmit}>
    
        <input onChange={this.onChange}
                  value={this.state.email}
                  // error={errors.email}
                  id="email"
                  type="email"
                  className="sign-child1"  />
        <input  onChange={this.onChange}
                  value={this.state.password}
                  // error={errors.password}
                  id="password"
                  type="password"
                  className="sign-child2"  />
  
        <div className="email1">Email</div>
        <div className="password1">Password</div>
        <input className="sign-child3" type="checkbox" required />
        <div className="remember-me">Remember Me</div>
        <div className="dont-have-an">
          Don’t have an account ? <Link to="/Register">Sign Up</Link>
        </div>
        <div className="forgot-password">Forgot password</div>
        <button className="rectangle-button" type="submit" />
        <div className="sign-in" type="submit">Sign In</div>
        {/* <div className="sign-in" >Sign In</div> */}
      </form>
    </div>
  );
};
};


RegistrationPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(RegistrationPage);
// export default ;
