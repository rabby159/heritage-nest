import React, { useContext } from 'react';
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            Swal.fire({
                title: "Congratulation",
                text: "Your account is ready to use. You will be redirected to the Home page in a few seconds..",
                icon: "success",
              });
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn p-2 bg-[#ECF5FF] rounded-md'><FaGoogle></FaGoogle>Continue with Google
                </button>
                <button className='btn   p-2 bg-[#ECF5FF] rounded-md my-2'><FaFacebook></FaFacebook> Continue with Facebook
                </button>
                <button className='btn p-2 bg-[#ECF5FF] rounded-md'> <FaApple></FaApple> Continue with Apple
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;