import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import '../Login/Login.css'

const Register = () => {
    const {signinWithgoogle}=useAuth();

    return (
        <div className="loginform">
            <div>
                <h2>Register: Create Account</h2>
                <form action="">
                    <input type="text" placeholder="name"/> <br />
                    <input type="email" placeholder="email"/> <br />
                    <input type="password" placeholder="password"/> <br />
                    <input type="password" placeholder="retype-password"/>
                </form>
                <div>
                    <p>Already have an account? <Link to ="/Login">Login</Link></p>
                    <div>
                        <h3>or</h3>
                        <h4>Sign in with Google Account</h4>
                        <button className="btn-regular" onClick={signinWithgoogle} ><i class="fab fa-google">oogle</i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;