import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { updateEmail } from "firebase/auth";

const UserProfile = () => {
  const { user, profileUpdate, emailUpdate } = useContext(AuthContext);
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

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Password did not match. Try Again");
      return;
    } else {
      setError("");
    }
    profileUpdate(name, photo).then(() => {
      toast.success(`Dear ${name}, Profile updated`)
      navigate('/')
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
    <div className="w-3/4  mx-auto my-8 md:my-12">
      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:pb-8">
            Welcome, <span className="text-3xl">{user?.displayName}</span>{" "}
          </h2>
          <img className="w-fit" src={user?.photoURL} alt="" />
          <p><span className="font-semibold">Email: </span>{user?.email}</p>
          
        </div>

        <div>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
            <p className="font-semibold">Update your profile</p>
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
            {/* <div className="form-control">
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
            </div> */}
            {/* <div className="form-control">
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
              {/* <p>
                <small>
                  Already have an account?{" "}
                  <span>
                    {" "}
                    <Link to="/login" className="text-amber-500 underline">
                      Login
                    </Link>
                  </span>
                </small>
            </div> 
              </p> */}
            <div className="form-control mt-6">
              <button className="btn btn-warning" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
