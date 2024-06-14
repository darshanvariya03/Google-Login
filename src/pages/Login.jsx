import React from 'react'
import Logo from '../Google_Icons-09-512.webp'
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';

const Login = () => {

    const [GoogleAuth,setAuth] = useAuth();
    const navigate = useNavigate()

    const handelLogin = async() => {
        try{

            const googleLogin = await signInWithPopup(auth,googleAuthProvider)
            const token = googleLogin.user.accessToken;
            setAuth({
                ...GoogleAuth,
                token : token
            })
            localStorage.setItem('token',token)

            navigate('/');


            
        }catch(err){
            console.log(err);
            return false;
        }
    }


    return (
        <div>

            <div align="center">
                <h2>Login With Google</h2>
                <button onClick={() => handelLogin()} ><img src={Logo} alt='' width="70px" /></button>
            </div>
        </div>
    )
}

export default Login