import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
  const { emailLogin, googleLogin, githubLogin } = useContext(AuthContext)

  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [hidden, setHidden] = useState(false)

  const handleLogin = (e) =>{
      e.preventDefault()
      emailLogin(email, password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        
      })
      .catch(error =>{
        console.log(error.message)
      })
  }

  const hangleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  const handleGithubLogin = () =>{
    githubLogin()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

  return (
    <section className="flex justify-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login to continue</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
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
                  onChange={(e) =>{setPassword(e.target.value)}}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p className="py-2">{error && error}</p>
                 <div className="pt-2">
                  {hidden ? (
                    <FaEyeSlash onClick={() => setHidden(!hidden)}></FaEyeSlash>
                  ) : (
                    <FaEye onClick={() => setHidden(!hidden)}></FaEye>
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  <small>
                    Don't have an account?{" "}
                    <span>
                      {" "}
                      <Link to="/register" className="text-amber-500 underline">
                        Create one!
                      </Link>
                    </span>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning" type="submit">Login</button>
              </div>
              
            </form>
            <button onClick={hangleGoogleLogin} className="border py-3 flex justify-center items-center gap-2 hover:bg-slate-200">
                <div>
                  <img
                    src="/google_icon.jpeg"
                    className="h-10"
                    alt=""
                  />
                </div>
                <div>Continue with Google</div>
              </button>
              <button onClick={handleGithubLogin} className="border py-3 flex justify-center items-center gap-2 hover:bg-slate-200">
                <div>
                  <img
                    src="/github_icon.jpg"
                    className="h-10"
                    alt=""
                  />
                </div>
                <div>Continue with Github</div>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
