import React, { Component } from 'react';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../formInput/FormInput';
import './styles.scss';
import { signInWithGoogle } from '../firebase/utils.js'
  ;
class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email:'',password:''})
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name]:value})
  }
	render() {
		return (
			<div className="sign-in">
				<h2>Already have an account</h2>
				<span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required />
          
          <FormInput
            name="password"
            type="password"
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required />
          
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
