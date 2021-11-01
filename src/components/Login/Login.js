import React from 'react';
import { Link , useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
   
    const {signinWithgoogle}=useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/shop';
    const handleGoogleLogin = ()=>{
        signinWithgoogle()
        .then(result=>{
            const user = result;
            history.push(redirect)
        })
    }
    return (
        <div className="loginform">
            <div>
                <h3>Log in please</h3>
                <form>
                    <input type="email" placeholder="Email" />
                    <br />
                    <input type="password" placeholder="password" />
                    <br />
                    <input type="submit" placeholder="Submit" />

                </form>
                <div>
                    <p>Haven't an account? <Link to ="/Register">Register</Link></p>
                    <div>
                        <h3>or</h3>
                        <h4>Sign in with Google Account</h4>
                        <button className="btn-regular" onClick={handleGoogleLogin} ><i class="fab fa-google">oogle</i></button>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;