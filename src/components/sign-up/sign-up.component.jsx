import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {  auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    // previene el comportamiento normal
    event.preventDefault();
    // destruct las variables a ser utilizadas
    const{ displayName,email,password,confirmPassword} = this.state;
    // checa si el passwor es igual a confirm password
    if(password !== confirmPassword){
      alert("passwords don't match");
      return;
    }

    try{
      // crea un nuevo usuario con email y password
      // informacion es guardada en user
      const { user } = await auth.createUserWithEmailAndPassword(email,password);
       await createUserProfileDocument(user,{displayName});
       
       //limpia los campos
       this.setState = ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    }catch(error){
      console.error(error);
    }

  };

  handleChange = event => {
    const {  name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {displayName,email,password,confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form'  onSubmit={this.handleSubmit}>
            <FormInput
            name='displayName'
            type='text'
            onChange={this.handleChange}
            value={displayName}
            label='Dispalay Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={this.handleChange}
          label='Confirm assword'
          required
        />

          <div className='buttons'>
            <CustomButton type='submit'> SIGN UP</CustomButton>
          
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;