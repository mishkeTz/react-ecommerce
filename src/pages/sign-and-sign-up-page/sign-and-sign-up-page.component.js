import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-and-sign-up-page.styles.scss';

const SignInAndSignOutPage = () => (
    <div className='sign-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignOutPage;