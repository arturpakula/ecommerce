import { Component } from 'react';
import { singInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.comonent';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    
    handleGoogleSignIn = event => {
        event.preventDefault();
        singInWithGoogle();
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} required handleChange={this.handleChange} />
                    <FormInput name='password' type='password' label='Password' value={this.state.password} required handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={this.handleGoogleSignIn} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;