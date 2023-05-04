import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [hidden, setHidden] = useState(true);
  const [disable, setDisable] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Password did not match. Try Again");
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        e.target.reset();
        profileUpdate(name, photo).then(() => {
          toast.success(`Dear ${name}, your profile has been updated`);
          navigate(from);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          setError("Email already exists");
          setError("Email already exists");
        } else {
          setError(errorMessage);
        }
      });
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;

    if (!/[A-Z]/.test(passwordInput)) {
      setError("At least one upper case");
      return;
    } else if (!/[a-z]/.test(passwordInput)) {
      setError("At least one lower case");
    } else if (!/[0-9]/.test(passwordInput)) {
      setError("At least one digit");
    } else if (!/[#?!@$%^&*-]/.test(passwordInput)) {
      setError("At least one special character");
    } else if (!/.{6,}/.test(passwordInput)) {
      setError("Minimum six in length");
    } else {
      setError("");
    }
    setPassword(passwordInput);
  };

  return (
    <section className="flex justify-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  onChange={(e) => {
                    setPhoto(e.target.value);
                  }}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  on
                  onChange={handlePassword}
                  type={hidden ? "password" : "text"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  onChange={(e) => setConfirm(e.target.value)}
                  type={hidden ? "password" : "text"}
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
                <div className="pt-2">
                  {hidden ? (
                    <FaEyeSlash onClick={() => setHidden(!hidden)}></FaEyeSlash>
                  ) : (
                    <FaEye onClick={() => setHidden(!hidden)}></FaEye>
                  )}
                </div>
                <p className={error && "text-red-500"}>{error && error}</p>
                <p>
                  <small>
                    Already have an account?{" "}
                    <span>
                      {" "}
                      <Link to="/login" className="text-amber-500 underline">
                        Login
                      </Link>
                    </span>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
