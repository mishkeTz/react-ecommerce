import React  from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        type='email'
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        label='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        type='password'
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {` `}
                            Sign In With Google{` `}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;