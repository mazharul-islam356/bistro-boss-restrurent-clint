import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const pass = form.pass.value
        console.log( email, pass );
        signIn(email,pass)
        .then(result => {
          const user = result.user
          console.log(user)
        })
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
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="email"
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
              {/* <div className="form-control">
              <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Input Your Captcha"
                  className="input input-bordered"
                  required
                />
                <button onClick={handleApply} className='btn btn-outline btn-xs mt-2'>Apply</button>
                
              </div> */}
              {/* <div className="form-control mt-6">
                <button disabled={validate} className="btn btn-primary">Login</button>
              </div> */}
              <button className="btn btn-primary">Sign Up</button>
              <p>Already have an Account? <Link className="btn btn-link" to='/login'>login</Link> now</p>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;