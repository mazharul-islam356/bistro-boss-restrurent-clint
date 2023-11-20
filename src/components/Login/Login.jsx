import { useContext, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';



const Login = () => {
  const {signIn,googleLogin} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  console.log('from foodcart location', location.state);

  const handleGLogin = (media) => {
    media()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }

    const handleLogin = e => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const pass = form.pass.value
        console.log( email, pass );
        signIn(email,pass)
        .then(result => {
          const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            
        })

    }


    const [validate,setValidate]= useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const captchaRef = useRef(null)

    const handleApply = () =>{
        const value = captchaRef.current.value
        console.log(value);
        if(validateCaptcha(value)==true){
            setValidate(false)
        }else{
            setValidate(true)
            toast.error('Captcha validation failed.')

        }
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex ">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
              <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Input Your Captcha"
                  className="input input-bordered"
                  
                />
                <button onClick={handleApply} className='btn btn-outline btn-xs mt-2'>Apply</button>
                
              </div>
              <button onClick={()=> handleGLogin(googleLogin)} className="btn mt-3">
                  Continue With
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              <div className="form-control mt-6">
                <button disabled={false} className="btn btn-primary">Login</button>
              </div>
              <p>No Account? <Link className="btn btn-link" to='/signUp'>Sign Up</Link> now</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
