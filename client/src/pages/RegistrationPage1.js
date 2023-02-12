import { useCallback } from "react";
import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import "./RegistrationPage1.css";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

// const navigate = useNavigate();

class RegistrationPage1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
this.props.registerUser(newUser, this.props.history); 
  };

// const RegistrationPage1 = () => {
  // const navigate = useNavigate();

  // const onSignInTextClick = useCallback(() => {
    // navigate("/");
  // }, [navigate]);

  render() {
    const { errors } = this.state;

  return (
    <>
    <div className="registration-page1">
      <div className="create-account">Create Account</div>
      <img
        className="iconsaxlineargoogle"
        alt=""
        src="../iconsaxlineargoogle.svg"
      />
      <div className="or-use-your">Or use your email for registration:</div>
      <img
        className="digital-screen-with-environmen-icon1"
        alt=""
        src="../digitalscreenwithenvironmentday-1@2x.png"
      />
      <form className="sign1" method="post" onSubmit={this.onSubmit}>
          <input
          onChange={this.onChange}
          value={this.state.name}
          error={errors.name}
          id="name"
          type="text"
          className={classnames("rectangle-input", {
            invalid: errors.name
          })} />
        <input className="sign-child1"
        onChange={this.onChange}
        value={this.state.email}
        error={errors.email}
        id="email"
        type="email"
        />
        <input 
        onChange={this.onChange}
        value={this.state.password}
        error={errors.password}
        id="password"
        type="password"
        className={classnames("sign-child2", {
          invalid: errors.email
        })} />
        <div className="name">Name</div>
        <div className="email1">Email</div>
        <div className="password1">Password</div>
        <input className="sign-child3" type="checkbox" required />
        <div className="i-agree-to">
          I agree to the Terms and Privacy Policy.
        </div>
        <button className="sign-child4" type="submit" />
        <button className="sign-child5" type="submit"/>
        <div className="sign-up">Sign Up</div>
        <div className="sign-in1">
          <Link to="/login">Sign In</Link>
        </div>
      </form>
    </div>
    </>
  );
};
};
RegistrationPage1.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
// export default RegistrationPage1;
export default connect(
  mapStateToProps,
  { registerUser }
)((RegistrationPage1));
