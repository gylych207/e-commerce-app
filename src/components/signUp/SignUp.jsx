import React, { Component } from 'react';
import './styles.scss';
import formInput from '../formInput/FormInput';
import customButton from '../customButton/CustomButton';
import { auth, createUserProfileDocument } from '../firebase/utils.js';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I dont have an account </h2>
				<span>Sign up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<formInput
						type="text"
						name="displayName"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>

					<formInput
						type="email"
						name="email"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>

					<formInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
				</form>
			</div>
		);
	}
}

export default SignUp;
