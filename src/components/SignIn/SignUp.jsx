import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {

  const {signUp} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const pass = form.pass.value
        console.log( email, pass );

        signUp(email,pass)
        .then(result => {
          const user = result.user
          console.log(user)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex ">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


            <form onSubmit={handleSignUp}>

            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  
                />
              </div>
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
            
              <button className="btn btn-primary">Sign Up</button>
              <p>Already have an Account? <Link className="btn btn-link" to='/login'>login</Link> now</p>
            </div>


            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;