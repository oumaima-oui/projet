import React, {useState,useEffect} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner,
} from "mdb-react-ui-kit";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify'; 
import { login } from '../redux/features/authSlice';
import {GoogleLogin} from "react-google-login";
import { googleSignIn } from '../redux/api';


const initialState = {
    email: "",
    password: "",
};


const Login = () => {

    const [formValue, setFormValue] = useState(initialState);
    const {loading,error} = useSelector((state) => ({...state.auth}))
    const {email, password} = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
       error && toast.error(error);
    }, [error])
    const handlSumbit = (e) => {
        e.preventDefault();
        if(email && password) {
            dispatch(login({formValue,navigate, toast}));
        }
    };
    const onInputChange = (e) => {
        let {name, value} = e.target;
        setFormValue({ ...formValue, [name]: value});
    };
    const googleSuccess = (resp) => {
        const email = resp?.profileObj?.email;
        const name = resp?.profileObj?.name;
        const token = resp?.tokenId;
        const googleId = resp?.googleId;
        const result = { email, name, token, googleId };
        dispatch(googleSignIn({ result, navigate, toast }));
      };
      const googleFailure = (error) => {
        toast.error(error);
    };

  return (
     <div className='section'>
        <div className='imgBx'>
            <img src='https://media.istockphoto.com/vectors/register-account-submit-access-login-password-username-internet-vector-id1281150061?k=20&m=1281150061&s=612x612&w=0&h=wpCvmggedXRECWK-FVL98MMllubyevIrXuUu50fdCqE='alt=''/>
        </div>
            <div className='login'>
                <div 
                    style={{
                    margin: "auto", 
                    padding: "90px", 
                    maxWidth: "490px",
                    marginTop: "20px",
                    position: "left",
                    }}
                >
                    <MDBCard alignment='center'>
                        <MDBIcon fas icon='user-circle' className='fa-2x' />
                        <h5>Sign In</h5>
                        <MDBCardBody>
                            <MDBValidation onSubmit={handlSumbit} noValidate className='row g-3'>
                                <div className='col-md-12'>
                                    <MDBInput 
                                    label="Email"
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={onInputChange}
                                    required
                                    invalid
                                    validation="Please provide your email"
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <MDBInput 
                                    label="Password"
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={onInputChange}
                                    required
                                    invalid
                                    validation="Please provide your password"
                                    />
                                </div>
                                <div className='col-12'>
                                    <MDBBtn style={{width: "100%"}} className="mt-12">
                                        {loading && (
                                            <MDBSpinner 
                                            size='sm'
                                            role="status"
                                            tag= "span"
                                            className='me-2'
                                            />
                                        )}
                                        Login
                                    </MDBBtn>
                                </div>
                            </MDBValidation>
                            <br />
                            <GoogleLogin
                            clientId='300321951820-2hpfs92rnnd0hen77ll5v5mh8ildqhi0.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <MDBBtn 
                                style={{width: "100%"}}
                                color="danger" 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                >
                                <MDBIcon className='me-2' fab icon='google'/> google Sign In
                                </MDBBtn>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                            />
                        </MDBCardBody>
                        <MDBCardFooter>
                            <Link to="/register">
                                <p>Don't have an account ? Sign Up</p>
                            </Link>
                        </MDBCardFooter>
                    </MDBCard>
                </div>
        </div>
    </div>
  )
}

export default Login